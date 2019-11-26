#include <iostream>
#include <iomanip>
#include <cmath>
using namespace std;

int perfil=0;
float reais;

int Primeiro (int quantidade, int Resultado){
  //Nessa parte são declaradas as perguntas e as posiçoes respostas.
  string Pergunta[11],Resposta[11],Reset;
  Pergunta[0]= "\n01° Por quanto tempo você pretende deixar seu dinheiro investido?\n"
    "\n A: Menos de 6 meses\n"
    "\n B: Entre 6 meses e 1 ano\n"
    "\n C: Entre 1 ano e 3 anos\n"
    "\n D: Acima de 3 anos\n";
  Pergunta[1]= "\n02° Qual o objetivo desse investimento?\n"
    "\n A: Preservação do capital para não perder valor ao longo do tempo, assumindo baixos riscos de perdas\n"
    "\n B: Aumento gradual do capital ao longo do tempo, assumindo riscos moderados\n"
    "\n C: Aumento do capital acima da taxa de retorno média do mercado, mesmo que isso implique assumir riscos de perdas elevada\n"
    "\n D: Obter no curto prazo retornos elevados e significativamente acima da taxa de retorno média do mercado, assumindo riscos elevados\n";
  Pergunta[2]= "\n03° Qual das alternativas melhor classifica sua formação e experiência com o mercado financeiro?\n"
    "\n A: Não possuo formação acadêmica ou conhecimento do mercado financeiro\n"
    "\n B: Possuo formação acadêmica na área financeira, mas não tenho experiência com o mercado financeiro\n"
    "\n C: Possuo formação acadêmica em outra área, mas possuo conhecimento do mercado financeiro\n"
    "\n D: Possuo formação acadêmica na área financeira ou pleno conhecimento do mercado financeiro\n";
  Pergunta[3]= "\n04° Considerando seus rendimentos regulares, qual a porcentagem você pretende reservar para aplicações financeiras?\n" 
    "\n A: No máximo 25%\n"
    "\n B: Entre 25.01 e 50%\n"
    "\n C: Acima de 50%\n";
  Pergunta[4]= "\n05° Caso as suas aplicações sofressem uma queda superior a 30%, o que você faria?\n"
    "\n A: Resgataria toda a aplicação e aplicaria na poupança\n"
    "\n B: Manteria aplicação aguardando uma melhora do mercado\n"
    "\n C: Aumentaria a aplicação para aproveitar as oportunidades do mercado\n";
  Pergunta[5]= "\n06° Como está distribuído o seu patrimônio?\n"
    "\n A: Meu patrimônio não está aplicado ou está todo aplicado em renda FIxa e/ou imóveis\n"
    "\n B: Menos de 25% em renda variável e o restante em renda fixa e/ou imóveis\n"
    "\n C: Entre 25.01 e 50% aplicado em renda variável e o restante em renda fixa e/ou imóveis\n"
    "\n D: Acima de 50% em renda variável\n";
  Pergunta[6]= "\n07° Em relação as aplicações e rendimentos, em qual dessas situações você se enquadra?\n" 
    "\n A: Eventualmente posso resgatar parte das aplicações para fazer frente aos meus gastos. Contudo, não tenho intenção de resgatar no curto prazo e pretendo fazer aplicações regulares\n"
    "\n B: Conto com o rendimento dessas aplicações para complementar minha renda mensal\n"
    "\n C: Não tenho intenção de resgatar no curto prazo, mas não pretendo realizar novas aplicações\n"
    "\n D: Não tenho intenção de resgatar no curto prazo e ainda pretendo fazer aplicações regulares\n";
  Pergunta[7]= "\n08° Indique em quais aplicações listadas abaixo você já investiu e qual a frequência nos últimos dois anos. Pode assinalar mais do que uma alternativa. Obs: Efetue a somatória dos pontos referente a questão e escolha a alternativa equivalente:\n"
    // Tabela #1.
      "\n ||  Tipos de Aplicações || \n"
      "\n[1°] |Nunca investi = 0|  |1 a 2 vezes = 1|  |3 ou +vezes = 1|\n"
      "\n[2°] |Nunca investi = 0|  |1 a 2 vezes = 2|  |3 ou +vezes = 3|\n"
      "\n[3°] |Nunca investi = 0|  |1 a 2 vezes = 5|  |3 ou +vezes = 6|\n"
    // Tabela #2.
      "\n [1°] \n Fundos Renda Fixa Simples ou Indexados \n Fundos Renda Fixa Duração Baixa, Média ou Livre,Renda Fixa Títulos Públicos \n Renda Fixa (CDB, LCI, LCA, LF Sênior) indexada ao CDI \n Fundos Multimercados Balanceados, Dinâmicos ou de Capital Protegido Títulos Não Financeiros (Debêntures, CRI, CRA, CDCA, CCB, CPR) indexado ao CDI – Emissor com Grau de Investimento \n LF Subordinada – Emissor com Grau de Investimento \n BTC – Posições doadoras em Empréstimos de Ações\n" 
      "\n [2°] \n FIDC \n Títulos Não Financeiros (Debêntures, CRI, CRA, CDCA, CCB, CPR)indexado ao CDI – Emissor sem Grau de Investimento\n"  
      "\n [3°] \n Fundos Renda Fixa Duração Média ou Livre – Crédito Livre \n Fundos Renda Fixa Duração Alta \n Fundos Ações \n Fundos com Alavancagem \n Fundos Multimercados \n Fundos Imobiliários \n FIP \n FIDC – Outros Indexadores ex CDI – Emissão sem Grau de Investimento – Prazo acima de 3 anos \n Fundo Cambial \n Ações (Mercado à vista, BDR, ETF) \n LF Subordinada – Emissor sem Grau de Investimento \n BTC – Posições tomadoras em Empréstimos de Ações \n Derivativos Listados em Bolsa (Futuros, Opções e Termos)\n"

    "\n A: Entre 0 e 1 ponto\n"
    "\n B: Entre 2 e 4 pontos\n"
    "\n C: Acima de 5 pontos\n";
  Pergunta[8]= "\n09° Tomando por base as respostas da questão anterior, informar o volume aproximado que foi destinado a cada operação no período. Obs: Efetue a somatória dos pontos referente a questão e escolha a alternativa equivalente:\n" 
    // Tabela #3.
    "\n ||  Tipos de Aplicações || \n"
    "\n[1°] |Nunca investi = 0|  |Menos de R$ 10mil = 1|  |Entre R$ 10.001 a R$ 50.000 = 1|  |Entre R$ 50.001 a R$ 100.000 = 1|  |Acima de R$ 100.001 = 1|\n"
    "\n[2°] |Nunca investi = 0|  |Menos de R$ 10mil = 2|  |Entre R$ 10.001 a R$ 50.000 = 3|  |Entre R$ 50.001 a R$ 100.000 = 4|  |Acima de R$ 100.001 = 5|\n"
    "\n[3°] |Nunca investi = 0|  |Menos de R$ 10mil = 7|  |Entre R$ 10.001 a R$ 50.000 = 8|  |Entre R$ 50.001 a R$ 100.000 = 9|  |Acima de R$ 100.001 = 10|\n" 
    // Tabela #4.
    "\n [1°] \n Fundos Renda Fixa Simples ou Indexados \n Fundos Renda Fixa Duração Baixa, Média ou Livre,Renda Fixa Títulos Públicos \n Renda Fixa (CDB, LCI, LCA, LF Sênior) indexada ao CDI \n Fundos Multimercados Balanceados, Dinâmicos ou de Capital Protegido Títulos Não Financeiros (Debêntures, CRI, CRA, CDCA, CCB, CPR) indexado ao CDI – Emissor com Grau de Investimento \n LF Subordinada – Emissor com Grau de Investimento \n BTC – Posições doadoras em Empréstimos de Ações\n" 
    "\n [2°] \n FIDC \n Títulos Não Financeiros (Debêntures, CRI, CRA, CDCA, CCB, CPR)indexado ao CDI – Emissor sem Grau de Investimento\n"  
    "\n [3°] \n Fundos Renda Fixa Duração Média ou Livre – Crédito Livre \n Fundos Renda Fixa Duração Alta \n Fundos Ações \n Fundos com Alavancagem \n Fundos Multimercados \n Fundos Imobiliários \n FIP \n FIDC – Outros Indexadores ex CDI – Emissão sem Grau de Investimento – Prazo acima de 3 anos \n Fundo Cambial \n Ações (Mercado à vista, BDR, ETF) \n LF Subordinada – Emissor sem Grau de Investimento \n BTC – Posições tomadoras em Empréstimos de Ações \n Derivativos Listados em Bolsa (Futuros, Opções e Termos)\n"

    "\nA: 1 ponto\n"
    "\nB: Entre 2 e 6 pontos\n"
    "\nC: Acima de 7 pontos\n";
  Pergunta[9]= "\n10° Qual sua faixa de renda mensal média?\n"
    "\n A: Até R$ 1.000\n"
    "\n B: De R$ 1.001 até R$ 5.000\n"
    "\n C: De R$ 5.001 até R$ 10.000\n"
    "\n D: Acima de R$ 10.000\n";
  Pergunta[10]= "\n11° Qual o valor aproximado do seu patrimônio?\n"
    "\n A: Até R$ 10.000\n"
    "\n B: De R$ 10.001 até R$ 100.000\n"
    "\n C: De R$ 100.001 até R$ 500.000\n"
    "\n D: De R$ 500.001 até R$ 1.000.000\n"
    "\n E: Acima de R$ 1.000.001\n";
  //Apresentação das perguntas e respostas.     
  cout << Pergunta[quantidade] << "\n\n";
  cin >> Resposta[quantidade];
        //Avalição do Resultado.
      if (Resposta[quantidade]=="a" || Resposta[quantidade]=="A"){
        Resultado+=0;
      } else if (Resposta[quantidade]=="b" || Resposta[quantidade]=="B"){
        Resultado+=2;
      } else if (Resposta[quantidade]=="c" || Resposta[quantidade]=="C"){
        Resultado+=3;
      } else if (Resposta[quantidade]=="d" || Resposta[quantidade]=="D"){
        Resultado+=4;
      } else if (Resposta[quantidade]=="e" || Resposta[quantidade]=="E"){
        Resultado+=5;
      }
    cout << "\n";
    // Resultado
    if (quantidade==10){
      if (Resultado<=14){
        perfil=1;
        cout << "CONSERVADOR.\nVocê é conservador quando seu objetivo com o investimento é proteger seu patrimônio e, por isso, não se sente confortável com as oscilações de mercado.\n";
      } else if (Resultado>14&&Resultado<36){
        perfil=2;
        cout << "MODERADO.\nVocê é um investidor moderado quando o objetivo com o investimento é proteger seu patrimônio, porém, se sente seguro em direcionar uma parcela de suas aplicações em maior risco, em troca da chance de obter uma melhor rentabilidade para seu dinheiro.\n";
      } else if(Resultado>=36){
        perfil=3;
        cout << "ARROJADO.\nO principal objetivo do investidor agressivo é aumentar o rendimento sobre o patrimônio. Para isso, aplica uma grande parcela de suas economias em mercados de maior risco, independente das oscilações do mercado. Geralmente, o investidor agressivo conhece bem o mercado financeiro e utiliza os momentos de crise em benefício próprio.\n"; 
      }
      cout << "..........\n";
    // Retorna a função "main".
    return 1;}
  return Primeiro(quantidade+1,Resultado);
}

int Segundo(){
  if(perfil == 0){
    cout << "Para usar essa função, você precisa definir o seu perfil de investimento na sessão 1 do menu";
  return 1;}
  cout << "Digite o valor que você deseja investir: \n";
  cout << "R$";
  cin >> reais;

  if(perfil == 1){
    cout << "Com um perfil conservador, a recomendação de carteira deve ser dividida nas seguintes alocações: \n\n";
    cout << "(5%)  Poupança = R$" << fixed << setprecision(2) << reais*0.05 << "\n";
    cout << "(25%) Tesouro Direto = R$" << fixed << setprecision(2) << reais*0.25 << "\n";
    cout << "(20%) Previdência Privada = R$" << fixed << setprecision(2) << reais*0.20 << "\n";
    cout << "(25%) Fundos de Renda Fixa = R$" << fixed << setprecision(2) << reais*0.25 << "\n";
    cout << "(20%) CDB, LCI, LCA = R$" << fixed << setprecision(2) << reais*0.20 << "\n";
    cout << "(5%)  Fundo Imobiliário, Ações = R$" << fixed << setprecision(2) << reais*0.05 << "\n";
  } else if(perfil == 2){
    cout << "Com um perfil moderado, a recomendação de carteira deve ser dividida nas seguintes alocações: \n\n";
    cout << "(20%) Tesouro Direto = R$" << fixed << setprecision(2) << reais*0.20 << "\n";
    cout << "(20%) Previdência = R$" << fixed << setprecision(2) << reais*0.20 << "\n";
    cout << "(20%) Fundos de Fixa = R$" << fixed << setprecision(2) << reais*0.20 << "\n";
    cout << "(15%) CDB, LCI, LCA = R$" << fixed << setprecision(2) << reais*0.15 << "\n";
    cout << "(5%)  Poupança" << fixed << setprecision(2) << reais*0.05 << "\n";
    cout << "(20%) Ações, COE, Fundos Imobiliários, Multimercado = R$" << fixed << setprecision(2) << reais*0.20 << "\n";
  } else if(perfil == 3){
    cout << "Com um perfil arrojado, a recomendação de carteira deve ser dividida nas seguintes alocações: \n\n";
    cout << "(10%) Tesouro Direto = R$" << fixed << setprecision(2) << reais*0.10 << "\n";
    cout << "(20%) Previdência Privada = R$" << fixed << setprecision(2) << reais*0.20 << "\n";
    cout << "(10%) Fundos de Renda = R$" << fixed << setprecision(2) << reais*0.10 << "\n";
    cout << "(60%) Ações, COE, Fundos Imobiliários, Multimercado, Cambial, Operações Estruturadas, Criptomoedas = R$" << fixed << setprecision(2) << reais*0.60 << "\n";
  }
return 1;}

int Terceiro(){
  float lucro, percent;
  cout << "Digite o valor que você deseja investir: \n";
  cout << "R$";
  cin >> reais;
  cout << "\n";
    if(perfil == 0){
      cout << "Escolha um tipo de perfil:\n";
      cout << "[1] Conservador\n";
      cout << "[2] Moderado\n";
      cout << "[3] Arrojado\n";
      cin >> perfil;
    }
    if(perfil == 1){
    cout << "Com um perfil CONSERVADOR, seguindo a nossa recomendação de carteira e se baseando no desempenho de cada tipo de investimento como demonstrado abaixo: \n\n";
    cout << "TABELA DE RENDIMENTOS ANUAIS (BASEADOS NOS ÚLTIMOS 12 MESES)";
    cout << "Poupança -> 6%\n";
    cout << "Tesouro Direto -> 10%\n";
    cout << "Previdência Privada -> 12%\n";
    cout << "Fundos de Renda Fixa -> 7%\n";
    cout << "CDB, LCI, LCA -> 12%\n";
    cout << "Fundo Imobiliário, Ações -> 27%\n";

    lucro = (((reais*0.05)*1.06)+((reais*0.25)*1.10)+((reais*0.20)*1.12)+((reais*0.25)*1.07)+((reais*0.20)*1.12)+((reais*0.05)*1.27)) - reais;
    percent = (((((reais*0.05)*1.06)+((reais*0.25)*1.10)+((reais*0.20)*1.12)+((reais*0.25)*1.07)+((reais*0.20)*1.12)+((reais*0.05)*1.27)) / reais)-1)*100;
  } else if(perfil == 2){
    cout << "Com um perfil MODERADO, seguindo a nossa recomendação de carteira e se baseando no desempenho de cada tipo de investimento como demonstrado abaixo: \n\n";
    cout << "TABELA DE RENDIMENTOS ANUAIS (BASEADOS NOS ÚLTIMOS 12 MESES)";
    cout << "Tesouro Direto -> 10%\n";
    cout << "Previdência -> 12%\n";
    cout << "Fundos de Fixa -> 7%\n";
    cout << "CDB, LCI, LCA -> 12%\n";
    cout << "Poupança -> 6%\n";
    cout << "Ações, COE, Fundos Imobiliários, Multimercado -> 27%\n";

    lucro = (((reais*0.20)*1.10)+((reais*0.20)*1.12)+((reais*0.20)*1.07)+((reais*0.15)*1.12)+((reais*0.05)*1.06)+((reais*0.20)*1.27)) - reais;
    percent = (((((reais*0.20)*1.10)+((reais*0.20)*1.12)+((reais*0.20)*1.07)+((reais*0.15)*1.12)+((reais*0.05)*1.06)+((reais*0.20)*1.27)) / reais)-1)*100;
  } else if(perfil == 3){
    cout << "Com um perfil ARROJADO, seguindo a nossa recomendação de carteira e se baseando no desempenho de cada tipo de investimento como demonstrado abaixo: \n\n";
    cout << "TABELA DE RENDIMENTOS ANUAIS (BASEADOS NOS ÚLTIMOS 12 MESES)";
    cout << "Tesouro Direto -> 10%\n";
    cout << "Previdência Privada -> 12%\n";
    cout << "Fundos de Renda Fixa -> 7%\n";
    cout << "Ações, COE, Fundos Imobiliários, Multimercado, Cambial, Operações Estruturadas, Criptomoedas -> 35%\n";
    
  lucro = (((reais*0.10)*1.10)+((reais*0.20)*1.12)+((reais*0.10)*1.07)+((reais*0.60)*1.35)) - reais;
  percent = (((((reais*0.10)*1.10)+((reais*0.20)*1.12)+((reais*0.10)*1.07)+((reais*0.60)*1.35)) / reais)-1)*100;
  }
  cout << "\nSeu rendimento deve ser de cerca de "<< fixed << setprecision(2) << percent << "% ou R$ " << lucro << ".\n";
  cout << "\n* Esses valores captados para fins de simulação são baseados no ano de 2019. Os rendimentos futuros podem sofrer alterações de acordo com o mercado.\n";
  return 1;}

int Quarto(float capital, float taxa, int periodo, float montante, int g,int opcao1, int opcao2){
  // No inicio ele vai apresentar as opções e como pode começar.
  if (g==0){
    cout << "Esse é o nosso simulador livre, onde você poderá calcular rendimentos e alterar os fatores que afetam a rentabilidade. Sinta-se livre para simular e manipular os dados.\n\n";
    cout << "Escolha uma das opções abaixo para começar: \n";
    cout << "[1] Calcular o montante obtido\n";
    cout << "[2] Calcular a taxa necessária\n";
    cout << "[3] Calcular o capital necessário\n";
    cout << "[4] Calcular o período necessário\n";
    cout << "\n";
  // nessa parte voce escolhe como sera feito o calculo.
  cin >> opcao1;
  if (opcao1 == 1 || opcao1 == 2 || opcao1 == 3 || opcao1 == 4){
  // Nesse momento o usuario vai escolher a forma de calculo do investimento
    switch (opcao1){
        case 1:{
          cout << "Capital aplicado: ";
          cin >> capital;
          cout << "Taxa de remuneração: ";
          cin >> taxa;
          taxa=taxa/100;
          cout << "Periodo de variação do montante (em meses): ";
          cin >> periodo;
          break;}

        case 2:{
          cout << "Capital aplicado: ";
          cin >> capital;
          cout << "Periodo de variação do montante (em meses): ";
          cin >> periodo;
          cout << "Montante: ";
          cin >> montante;
          break;}


        case 3:{
          cout << "Periodo de variação do montante (em meses): ";
          cin >> periodo;
          cout << "Taxa de remuneração: ";
          cin >> taxa;
          taxa=taxa/100;
          cout << "Montante: ";
          cin >> montante;
          break;} 

        case 4:{
          cout << "Capital aplicado: ";
          cin >> capital;
          cout << "Taxa de remuneração: ";
          cin >> taxa;
          taxa=taxa/100;
          cout << "Montante: ";
          cin >> montante;
          break;}

      }
    } else{
        cout << "Função Invalida, Reinicie o programa" << endl;
      return 1;}
  } else{
  // apos a primeira conta, é apresentado a possibilidade de alterar as informaçoes ou começar de outra maneira.
    cout << "\nDeseja realizar outra função?\n";
    // Apos o primeiro calculo o usuario pode escolher sua proxima ação. 
    // Para evitar redudancias os "ifs" garantem a opçoes possiveis, com base no switch opçao1.
      if (opcao1!=1){
        cout << "[1] Alterar valor do 'Montante'.\n";
      }
      if (opcao1!=2){
        cout <<  "[2] Trocar 'Taxa'.\n";
      }
      if (opcao1!=3){
        cout << "[3] Modificar 'Capital'.\n";
      }
      if (opcao1!=4){
        cout << "[4] Substituir 'Periodo'.\n";
      }
      cout << "[5] Reiniciar o Calculo.\n[6] Encerrar função.\n";

  cin >> opcao2;
  if (opcao2 == 1 || opcao2 == 2 || opcao2 == 3 || opcao2 == 4 || opcao2 == 5){
    switch (opcao2){
      // Para evitar redudancias os "ifs" tambem esse switch vão garantir as opçoes possiveis, com base na opçao1 e opçao2.
      case 1:{
        if (opcao2==opcao1){
          cout << "\nFunção Invalida, Tente Novamente \n" << endl;  
          return Quarto(capital,taxa,periodo,montante,g,opcao1,opcao2);
        } else{
            cout << endl;
            cout << "Novo Montante: ";
            cin >> montante;
          }
          break;}

      case 2:{
      if (opcao2==opcao1){
        cout << "\nFunção Invalida, Tente Novamente \n" << endl;
        return Quarto(capital,taxa,periodo,montante,g,opcao1,opcao2);
      } else{
          cout << endl;
          cout << "Nova taxa de remuneração: ";
          cin >> taxa;
          taxa=taxa/100;
        }
        break;}

      case 3:{
      if (opcao2==opcao1){
        cout << "\n Função Invalida, Tente Novamente \n" << endl;  
        return Quarto(capital,taxa,periodo,montante,g,opcao1,opcao2);
      } else{
        cout << endl;
        cout << "Novo Capital: " << endl;
        cin >> capital;
        }
      break;}

      case 4:{
      if (opcao2==opcao1){
        cout << "\nFunção Invalida, Tente Novamente \n" << endl;  
        return Quarto(capital,taxa,periodo,montante,g,opcao1,opcao2);
      } else{
          cout << endl;
          cout << "Novo Periodo: ";
          cin >> periodo;
        }
      break;}

        case 5:{
          cout << endl;
          return Quarto(capital,taxa,periodo,montante,g=0,opcao1,opcao2);}

        default:{
          cout << endl;
          return 1;}
    }
  } else{cout << "Função Invalida, Reinicie o programa" << endl;
  return 0;}}
  // Maneiras de calculos.
  if (opcao1==1)
    montante = capital*pow((1+taxa),periodo);
  if (opcao1==2)
    taxa = pow((montante/capital),(1.0/periodo));
  if (opcao1==3)
    capital = montante/(pow((1+taxa),periodo))-1;
  if (opcao1==4)
    periodo = (log10(montante)- log10(capital))/log10(taxa);
  // Apresentação dos resultados.
  cout << "\nMontante: R$"<< fixed << setprecision(2) << montante << endl;
  cout << "Capital: R$"<< fixed << setprecision(2) << capital << endl;
  cout << "Taxa: "<< fixed << setprecision(2) << taxa*100 << "%\n";
  cout << "Periodo(s): "<< fixed << setprecision(2) << periodo << endl;

  return Quarto(capital,taxa,periodo,montante,g+1,opcao1,opcao2);
}

void Sobre(){
  cout << "###################################################\n";
  cout << "####### PROJETO GUIA DE INVESTIMENTO MATA045 ######\n";
  cout << "####################### v1.0 ######################\n\n";
  cout << "Com a poupança rendendo cada vez menos e a popularização dos bancos digitais, o acesso ao mercado financeiro e a outros tipos de investimento se popularizou. Nossa aplicação tem o objetivo de dar uma base para aquelas pessoas que não possuem conhecimento aprofundado, mas querem começar a desbravar as novas possibilidades que os investimentos podem proporcionar.\n\n";
  cout << "Desenvolvido por \nGABRIEL BRITO\nTHALES MACÊDO\n";

}

int main(){
  float Y,C,D,E,G,T;
  int Opcao, Funcao, M, Z,errofatal,bug;

  // apresentação do menu principal.
  cout << "######################BEM-VINDO####################\n";
  cout << "####### PROJETO GUIA DE INVESTIMENTO MATA045 ######\n";
  cout << "################## MENU PRINCIPAL #################\n\n";
  cout << "[1] IDENTIFICAR SEU PERFIL DE INVESTIMENTO\n";
  cout << "[2] INDICAÇÕES DE ALOCAÇÃO DO SEU PORTFOLIO\n";
  cout << "[3] PREVISÃO DE GANHOS DO SEU PORTFOLIO\n";
  cout << "[4] SIMULADOR LIVRE\n";
  cout << "[5] SOBRE\n";
  cout << "[6] SAIR\n\n";

  // A seguir, o usuario vai indicar qual função deseja realizar, a partir de uma das strings.
    cin >> Opcao;
      if (Opcao == 1 || Opcao == 2 || Opcao == 3 || Opcao == 4 || Opcao == 5 || Opcao == 6){
    switch (Opcao){
      case 1:{
      cout << endl;
      Primeiro(Y=0,D=0);
      break;}

      case 2:{
      cout << endl;
      Segundo();
      break;}

      case 3:{
      cout << endl;
      Terceiro();
      break;} 

      case 4:{
      cout << endl;
      Quarto(Y,C,D,E,G=0,M,Z);
      break;}

      case 5:{
      cout << endl;
      Sobre();
      break;} 

      case 6:{
      cout << "Obrigado por usar a nossa aplicação.\nBONS INVESTIMENTOS!" << endl;
      return 0;} 

      default:{
      cout << "Função Invalida, Tente Novamente \n";
      return main();
      }
    }
  // Repetir o programa ou encerrar.
  cout << "\nVoltar ao menu principal? SIM [1] ou NÃO [2]" << endl;
  cin >> Funcao;
  cout << endl;
  if(Funcao==1){
    return main();
  } else{
    cout << "Obrigado por usar a nossa aplicação.\nBONS INVESTIMENTOS!" << endl;
    return 0;}
  } else{
    cout << "Função Invalida, Reinicie o programa" << endl;
    return 0;}
}