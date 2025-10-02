function doPost(e) {
  try {
    // LOG DETALHADO DE TUDO QUE CHEGA
    console.log('🚀 doPost EXECUTADO em: ' + new Date());
    console.log('📥 Evento completo:', e);
    console.log('📨 postData existe?', !!e.postData);
    console.log('📝 contents existe?', e.postData ? !!e.postData.contents : 'N/A');
    
    // SEMPRE enviar email quando doPost é chamado
    MailApp.sendEmail(
      'azulemprestimoaracruz@gmail.com',
      '🔔 APPS SCRIPT EXECUTADO',
      'doPost foi chamado em: ' + new Date().toLocaleString('pt-BR') + 
      '\n\nDados recebidos: ' + (e.postData ? e.postData.contents : 'NENHUM DADO')
    );
    
    // Parse dos dados se existirem
    if (e.postData && e.postData.contents) {
      console.log('📋 Conteúdo bruto:', e.postData.contents);
      const data = JSON.parse(e.postData.contents);
      console.log('✅ Dados parseados:', data);
      
      // Enviar email com dados
      MailApp.sendEmail(
        'azulemprestimoaracruz@gmail.com',
        'Nova Simulação - Azul Empréstimo',
        'Nome: ' + data.nome + 
        '\nEmail: ' + data.email + 
        '\nWhatsApp: ' + data.whatsapp + 
        '\nServiço: ' + data.servico + 
        '\nValor: ' + data.valor
      );
      
      // Salvar na planilha
      try {
        const sheet = SpreadsheetApp.openById('1hooOhureD8QGUDhpSkd00FiVJSVKbo7PfP5mAC8Y_hc').getActiveSheet();
        sheet.appendRow([
          new Date().toLocaleString('pt-BR'),
          data.nome || '',
          data.email || '',
          data.whatsapp || '',
          data.servico || '',
          data.valor || ''
        ]);
      } catch (sheetError) {
        console.log('Erro planilha:', sheetError);
      }
    }
    
    return ContentService.createTextOutput('OK');
    
  } catch (error) {
    console.log('Erro:', error);
    return ContentService.createTextOutput('ERRO: ' + error);
  }
}

// FUNÇÃO DE TESTE SUPER SIMPLES
function testeUltraSimples() {
  MailApp.sendEmail(
    'azulemprestimoaracruz@gmail.com',
    'TESTE ULTRA SIMPLES',
    'Este email foi enviado em: ' + new Date()
  );
  return 'Email enviado!';
}

// VERIFICAR PERMISSÕES BÁSICAS
function verificarPermissoes() {
  try {
    // Verificar usuário
    const user = Session.getActiveUser().getEmail();
    console.log('Usuário:', user);
    
    // Tentar enviar email
    MailApp.sendEmail(
      'azulemprestimoaracruz@gmail.com',
      'Teste de Permissões',
      'Usuário logado: ' + user + '\nData: ' + new Date()
    );
    
    return 'Permissões OK - Email enviado';
  } catch (error) {
    return 'ERRO: ' + error.toString();
  }
}

// TESTAR PLANILHA ESPECÍFICA
function testarPlanilha() {
  try {
    console.log('Testando acesso à planilha...');
    
    // Tentar acessar a planilha
    const SHEET_ID = '1hooOhureD8QGUDhpSkd00FiVJSVKbo7PfP5mAC8Y_hc';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    console.log('Planilha acessada:', sheet.getName());
    console.log('Número de linhas:', sheet.getLastRow());
    
    // Criar cabeçalho se necessário
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 6).setValues([
        ['Data/Hora', 'Nome', 'Email', 'WhatsApp', 'Serviço', 'Valor']
      ]);
      console.log('Cabeçalho criado');
    }
    
    // Adicionar linha de teste
    const testData = [
      new Date().toLocaleString('pt-BR'),
      'TESTE - João Silva',
      'teste@email.com',
      '27999887766',
      'Teste Apps Script',
      'R$ 1.000 (TESTE)'
    ];
    
    sheet.appendRow(testData);
    console.log('Linha de teste adicionada:', testData);
    
    // Enviar email de confirmação
    MailApp.sendEmail(
      'azulemprestimoaracruz@gmail.com',
      '✅ Teste da Planilha - SUCESSO',
      'Planilha testada com sucesso!\n\nID: ' + SHEET_ID + '\nNome: ' + sheet.getName() + '\nLinhas: ' + sheet.getLastRow() + '\nDados teste adicionados: ' + JSON.stringify(testData)
    );
    
    return 'Planilha testada com sucesso! Verifique o email e a planilha.';
    
  } catch (error) {
    console.error('Erro ao testar planilha:', error);
    
    // Tentar enviar email de erro
    try {
      MailApp.sendEmail(
        'azulemprestimoaracruz@gmail.com',
        '❌ Erro no Teste da Planilha',
        'ERRO ao testar planilha:\n\n' + error.toString() + '\n\nVerifique as permissões e o ID da planilha.'
      );
    } catch (emailError) {
      console.error('Erro no email também:', emailError);
    }
    
    return 'ERRO: ' + error.toString();
  }
}