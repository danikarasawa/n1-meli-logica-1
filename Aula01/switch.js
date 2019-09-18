let key = (prompt('Digite o número correspondente ao seu mês preferido do ano, por favor:'));
switch (key) {
    case '01':
    case '1':    
        document.write('Janeiro - onde tudo começa');
        break;
    case '02':
    case '2':
        document.write('Fevereiro - olha o samba aí, gente!');
        break;
    case '03':
    case '3':  
        document.write('Março - feliz ano-novo');
        break;
    case '04':
    case '4':
        document.write('Abril - ovinhos de chocolate');
        break;
    case '05':
    case '5':
        document.write('Maio - vamu casá, gente!');
        break;
    case '06':
    case '6':
        document.write('Junho - fim de semestre! EITA!');
        break;
    case '07':
    case '7':
        document.write('Julho - uma palavra > FÉRIAS');
        break;
    case '08':
    case '8':
        document.write('Agosto - um mês pra lá de curioso');
        break;  
    case '09':
    case '9':
        document.write('Setembro - ah... a primavera <3');
        break; 
    case '10':
        document.write('Outubro - Dia das Crianças + Halloween \o/');
        break;        
    case '11':
        document.write('Novembro - tá acabando o ano. Corre bater as metas!');
        break;
    case '12':
        document.write('Dezembro - Festas!! Uhuuuu');
        break;        
    default:
        alert('Ei, temos apenas 12 meses no ano, amiga. Vamos colocar um número válido para brincarmos?');
};