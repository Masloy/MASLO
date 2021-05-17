$(function(){
    
    function NOD(a,b){
        while ((a > 0) && (b > 0)){
            if (a > b) {
                a = a % b;
            }else{
                b = b % a;
            }
        }
        return a + b;
    }
    function FOfF(a,b){
        if (a < 0) a*=-1;
        if (b < 0) b*=-1;

        if(a > b){
          let c = a / b;
          
          return Math.floor(c);
        }
        else if(a < b){
            return 0;
          }
        else if(a == b){
            return 1;
          }
    }
    function ht(FF,FU,FD,opr,FF1,FU1,FD1){
        $('#gks').html('');
        if ($('#FFreg').attr('value') == '+'){
            FF *=-1;
            FU *=-1;
            $('#gks').append('<span class="reshOpr">-</span>');
        }
        if ((FF != 0) && (isNaN(FF) != true)) $('#gks').append('<span class="resh">'+ FF +'</span>');

        $('#gks').append('<dl> <dt class="resh">'+ FU +'</dt> <dd class="resh">'+ FD +'</dd></dl><span class="reshOpr">'+ opr + '</span>');

        if ($('#SFreg').attr('value') == '+'){
            FF1 *=-1;
            FU1 *=-1;
            $('#gks').append('<span class="reshPar">(</span><span class="reshOpr">-</span>');
        }
        if ((FF1 != 0) && (isNaN(FF1) != true)) $('#gks').append('<span class="resh">'+ FF1 +'</span>');

        $('#gks').append('<dl> <dt class="resh">'+ FU1 +'</dt> <dd class="resh">'+ FD1 +'</dd></dl>')

        if ($('#SFreg').attr('value') == '+') $('#gks').append('<span class="reshPar">)</span>')

        $('#gks').append('<span class="reshOpr">=</span>');
        //----------------------------------------------------------------------
        if ((FF == 0) && (FF1 == 0)) return 1;

        if ($('#FFreg').attr('value') == '+') $('#gks').append('<span class="reshOpr">-</span>');

        if (FF > 0) $('#gks').append('<dl> <dt class="resh">('+ FF + '*' + FD + ') +'+ FU +'</dt><dd class="resh">'+FD+'</dd></dl>');
        else $('#gks').append('<dl> <dt class="resh">'+ FU +'</dt><dd class="resh">'+ FD +'</dd></dl>');

        $('#gks').append('<span class="reshOpr">'+ opr +'</span>')
        
        if ($('#SFreg').attr('value') == '+') $('#gks').append('<span class="reshPar">(</span><span class="reshOpr">-</span>');

        if (FF1 > 0) $('#gks').append('<dl> <dt class="resh">('+ FF1 + '*' + FD1 + ') +'+ FU1 +'</dt><dd class="resh">'+FD1+'</dd></dl>');
        else $('#gks').append('<dl> <dt class="resh">'+ FU1 +'</dt><dd class="resh">'+ FD1 +'</dd></dl>');

        if ($('#SFreg').attr('value') == '+') $('#gks').append('<span class="reshPar">)</span>');

        $('#gks').append('<span class="reshOpr">=</span>');

        //----------------------------------------------------------------------
        if ($('#FFreg').attr('value') == '+')  $('#gks').append('<span class="reshOpr">-</span>');

        $('#gks').append('<dl> <dt class="resh">'+ ((FF*FD)+FU) + '</dt><dd class="resh">'+ FD + '</dd></dl><span class="reshOpr">'+ opr +'</span>');

        if ($('#SFreg').attr('value') == '+')  $('#gks').append('<span class="reshPar">(</span><span class="reshOpr">-</span>');

        $('#gks').append('<dl> <dt class="resh">'+ ((FF1*FD1)+FU1) + '</dt><dd class="resh">'+ FD1 + '</dd></dl>')

        if ($('#SFreg').attr('value') == '+') $('#gks').append('<span class="reshPar">)</span>')

        $('#gks').append('<span class="reshOpr">=</span>');

        
        return 0;
    }
    function HFFO(FFU,FFD){
        $('#gks').append('<span class="reshOpr">=</span>');
        if ((FFU < 0) && (FFD < 0)){FFU*=-1;FFD*=-1}
        else if (FFU < 0){$('#gks').append('<span class="reshOpr">-</span>'); FFU*=-1;}
        else if (FFD < 0) {$('#gks').append('<span class="reshOpr">-</span>'); FFD
        *=-1;}

        $('#gks').append('<dl> <dt class="resh">'+ FFU +'</dt><dd class="resh">'+ FFD +'</dd></dl>'); 
    }
    function mF(FU,FD,FU1,FD1){
        if (($('#FFreg').attr('value') == '+') && ($('#SFreg').attr('value') == '+')){}
        else if (($('#FFreg').attr('value') == '+') || ($('#SFreg').attr('value') == '+')) $('#gks').append('<span class="reshOpr">-</span>');

        if ($('#FFreg').attr('value') == '+') FU *=-1;
        if ($('#SFreg').attr('value') == '+') FU1 *=-1;

        $('#gks').append('<dl> <dt class="resh">'+ FU + '*' + FU1 +'</dt><dd class="resh">'+ FD + '*' + FD1 +'</dd></dl>');
        
    }
    function DivF(FU,FD,FU1,FD1){

        if ($('#FFreg').attr('value') == '+') {FU *=-1; $('#gks').append('<span class="reshOpr">-</span>');}
        

        $('#gks').append('<dl> <dt class="resh">'+ FU +'</dt><dd class="resh">'+ FD +'</dd></dl><span class="reshOpr">*</span>');

        if ($('#SFreg').attr('value') == '+') {FU1 *=-1;$('#gks').append('<span class="reshPar">(</span><span class="reshOpr">-</span>');}

        $('#gks').append('<dl> <dt class="resh">'+ FD1 +'</dt><dd class="resh">'+ FU1 +'</dd></dl>');

        if ($('#SFreg').attr('value') == '+') $('#gks').append('<span class="reshPar">)</span>');

        $('#gks').append('<span class="reshOpr">=</span>');

        if ($('#FFreg').attr('value') == '+') FU *=-1;
        if ($('#SFreg').attr('value') == '+') FD1 *=-1;
        mF(FU,FD,FD1,FU1);
    }
    function FGAS(FU,FD,FU1,FD1,dom,dom1,NOK,opr){

        var tens=false;

        if ((FD == NOK)&&(FD1 == NOK)) return 1;

        if ($('#FFreg').attr('value') == '+') {FU *=-1; $('#gks').append('<span class="reshOpr">-</span>');}

        if (FD == NOK) $('#gks').append('<dl> <dt class="resh">'+ FU +'</dt><dd class="resh">'+ FD +'</dd></dl>');
        else {
            $('#gks').append('<dl> <dt class="resh">'+ FU + '*' + dom +'</dt><dd class="resh">'+ FD + '*' + dom +'</dd></dl>');
        }

        $('#gks').append('<span class="reshOpr">'+ opr +'</span>');

        if (FU1 < 0) {FU1 *=-1;tens=true; $('#gks').append('<span class="reshPar">(</span><span class="reshOpr">-</span>');}

        if (FD1 == NOK) $('#gks').append('<dl> <dt class="resh">'+ FU1 +'</dt><dd class="resh">'+ FD1 +'</dd></dl>');
        else {
            $('#gks').append('<dl> <dt class="resh">'+ FU1 + '*' + dom1 +'</dt><dd class="resh">'+ FD1 + '*' + dom1 +'</dd></dl>');
        }
        if (tens == true) $('#gks').append('<span class="reshPar">)</span>');

        $('#gks').append('<span class="reshOpr">=</span>');

        if ($('#FFreg').attr('value') == '+') $('#gks').append('<span class="reshOpr">-</span>');

        $('#gks').append('<dl> <dt class="resh">'+ (FU*dom) +'</dt><dd class="resh">'+ (FD*dom) +'</dd></dl>');

        $('#gks').append('<span class="reshOpr">'+ opr +'</span>');

        if (tens == true) $('#gks').append('<span class="reshPar">(</span><span class="reshOpr">-</span>')

        $('#gks').append('<dl> <dt class="resh">'+ (FU1*dom1) +'</dt><dd class="resh">'+ (FD1*dom1) +'</dd></dl>');

        if (tens == true) $('#gks').append('<span class="reshPar">)</span>');
        
        $('#gks').append('<span class="reshOpr">=</span>');
    }
    function HF(FU,FU1,FD,opr){
        if ((FU > 0) && (FU1 > 0)){}
        else if ((FU < 0)&&(FU1 < 0)){FU1*=-1;FU*=-1;}
        else if (FU < 0) {FU *=-1; $('#gks').append('<span class="reshOpr">-</span>');}
        else if (FU1 < 0) {FU1*= -1; $('#gks').append('<span class="reshOpr">-</span>');}
        

        $('#gks').append('<dl> <dt class="resh">'+ FU+ opr + FU1 +'</dt><dd class="resh">'+ FD +'</dd></dl>');

        $('#gks').append('<span class="reshOpr">=</span>');
    }
    function aF(FFU,FD){
        if (FFU < 0){FFU*=-1;$('#gks').append('<span class="reshOpr">-</span>');}

        $('#gks').append('<dl> <dt class="resh">'+ FFU+'</dt><dd class="resh">'+ FD +'</dd></dl>');
    }
    function sF(FFU,FD){
        if (FFU < 0){FFU*=-1;$('#gks').append('<span class="reshOpr">-</span>');}
        $('#gks').append('<dl> <dt class="resh">'+ FFU+'</dt><dd class="resh">'+ FD +'</dd></dl>');
    }
    function socrFF(FFU,FFD,del){
        $('#gks').append('<span class="reshOpr">=</span>');

        if ((FFU > 0) && (FFD > 0)){}
        else if ((FFU < 0)&&(FFD < 0)){FFU*=-1;FFD*=-1;}
        else if (FFU < 0) {FFU *=-1; $('#gks').append('<span class="reshOpr">-</span>');}
        else if (FFD < 0) {FFD*= -1; $('#gks').append('<span class="reshOpr">-</span>');}
        
        $('#gks').append('<dl> <dt class="resh">'+ FFU + '/' + del +'</dt><dd class="resh">'+ FFD + '/' + del +'</dd></dl>');
        $('#gks').append('<span class="reshOpr">=</span>');
        $('#gks').append('<dl> <dt class="resh">'+ FFU/del +'</dt><dd class="resh">'+ FFD/del +'</dd></dl>');
    }
    function FinF(FFF,FFU,FFD){
        $('#gks').append('<span class="reshOpr">=</span>');

        if (FFF < 0) {$('#gks').append('<span class="reshOpr">-</span>');FFF*=-1};

        $('#gks').append('<span class="resh">'+ FFF +'</span>');
        if (FFU==0){}
        else $('#gks').append('<dl> <dt class="resh">'+ FFU +'</dt><dd class="resh">'+ FFD +'</dd></dl>');

    }
    $('#FFreg').click(function(){
        
       if ($('#FFreg').attr('value') == '-'){
        $(this).attr('value','+');
        $('#min1').show();
       }else{
        $(this).attr('value','-');
        $('#min1').hide();
       }
    });
    $('#SFreg').click(function(){
        
        if ($('#SFreg').attr('value') == '-'){
         $(this).attr('value','+');
         $('#min2').show();
        }else{
         $(this).attr('value','-');
         $('#min2').hide();
        }
     });
$('#click').click(function(){   
    var FF,FU,FD,FF1,FU1,FD1,opr;
    FF = parseInt($('#inFf').val());
    FU = parseInt($('#inFu').val());
    FD = parseInt($('#inFd').val());
    FF1 = parseInt($('#inFf1').val());
    FU1 = parseInt($('#inFu1').val());
    FD1 = parseInt($('#inFd1').val());
    opr = $('#opr').val();
    
    if (isNaN(FF) == true) FF= 0;
    if (isNaN(FF1) == true) FF1= 0;

    if (isNaN(FU) == true) FU= 0;
    if (isNaN(FD) == true) FD= 1;
    if (isNaN(FU1) == true) FU1= 0;
    if (isNaN(FD1) == true) FD1= 1;

    if ($('#FFreg').attr('value') == '+'){
        FF *= -1;
        FU *= -1;
    }
    if ($('#SFreg').attr('value') == '+'){
        FF1 *= -1;
        FU1 *= -1;
    }
    
    ht(FF,FU,FD,opr,FF1,FU1,FD1); 
    
    if(FF != 0){
        FF *= FD;
        FU += FF;
    }else{
    }
    if (FF1 != 0){
        FF1 *= FD1;
        FU1 += FF1;
    }else{
    }
    if ((opr == '-')&&($('#SFreg').attr('value') == '+')){
        opr = '+';
        FU1 *=-1;
    }
    
    var FFF,FFU,FFD;
    switch(opr){
        case '+':
        case '-':
            var NOK = (FD*FD1) / NOD(FD,FD1);
            var dom,dom1;
            dom = NOK / FD;
            dom1 = NOK / FD1;
            FGAS(FU,FD,FU1,FD1,dom,dom1,NOK,opr);
            
            
            FU *= dom;
            FU1 *= dom1;
            FFD = NOK;
            HF(FU,FU1,FD,opr);
            if (opr == '+'){
                FFU = FU+FU1;
                aF(FFU,FFD);
                console.log(FFU);
            }else if(opr == '-'){
                FFU = FU - FU1;
                sF(FFU,FFD)
            }else {
                alert('Неизвесная ошибка');
                return false;
            }
            
        break
        case '*':
            FFU = FU * FU1;
            FFD = FD * FD1;
            mF(FU,FD,FU1,FD1);
            HFFO(FFU,FFD);
        break
        case '/':
            FFU = FU * FD1;
            FFD = FD * FU1;
            DivF(FU,FD,FU1,FD1);
            HFFO(FFU,FFD);
        break
        default:
        alert("Ошибка оператора.");
        break
        }
            var del;
            if ((FFU < 0)&&(FFD < 0)) del = NOD(FFU*-1,FFD*-1);
            else if (FFU < 0) del = NOD(FFU*-1,FFD);
            else if (FFD < 0) del = NOD(FFU,FFD*-1);
            else del = NOD(FFU,FFD);
            
            
            if((del == 1) || (del == 0)){
            }else{
                socrFF(FFU,FFD,del);
                FFU /= del;
                FFD /= del;
            }
            console.log(FFU + '/' + FFD);
           FFF = FOfF(FFU,FFD);
           if (FFF == 0){
                
               console.log(FFU + '/' + FFD);
            }else{    
                if (FFU > 0) FFU -= (FFF*FFD);
                else if(FFU < 0) {FFU += (FFF*FFD); FFF*=-1;};
                FinF(FFF,FFU,FFD);
              console.log(FFF + ' ' + FFU + '/' + FFD);
             }
});
});