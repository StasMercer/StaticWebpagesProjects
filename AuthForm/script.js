  $(document).ready(function(){
      
      // обработка события фокуса. Юзер убрал фокус с поля тогда проверяем значения в нем и выводим результат
     $('input#name, input#email, input#number, input#password').unbind().blur( function(){
        
        var id = $(this).attr('id');//проверяемое поле
        var val = $(this).val();//значение в поле
       
         //обработка полей
         switch(id){
                 //проверка имени
             case 'name':
                 var reg_name=/^[a-zA-Zа-яА-Я]+$/;
                 
                 if (val.length>2 && val!= '' && reg_name.test(val)){
                    
                       $(this).addClass('not_error');
                       $('.error-name').text('Принято')
                                                 .css('color','green')
                                                 .animate({'paddingLeft':'10px'},400)
                                                 .animate({'paddingLeft':'5px'},400);
                     
                 }else {
                        $(this).removeClass('not_error').addClass('error');
                      $('.error-name').html('&bull; поле "Имя" обязательно для заполнения<br> &bull; длина имени должна составлять не менее двух символов<br> &bull; поле должно содержать только русские или латинские буквы')
                                                  .css('color','red');
                  
                 
                 
                 }
                 break;
                 
                 //проверка номера
             case 'number':
                     var reg_number=/^[0-9]+$/;
                 
                 if (val.length>2 && val!= '' && reg_number.test(val)){
                    
                       $(this).addClass('not_error');
                       $('.error-number').text('Принято')
                                                 .css('color','green')
                                                 .animate({'paddingLeft':'10px'},400)
                                                 .animate({'paddingLeft':'5px'},400);
                     
                 }else {
                        $(this).removeClass('not_error').addClass('error');
                       $('.error-number').html('&bull; поле "Телефон" обязательно для заполнения<br> &bull; длина номера должна составлять не менее двух символов<br> &bull; поле должно содержать только цифры')
                                                  .css('color','red');
                     
                     
                 
                 
                 }
                 break;
                 
                 
                    //проверка мейла
                 case 'email':
                     var reg_email=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                 
                 if ( val!= '' && reg_email.test(val)){
                    
                       $(this).addClass('not_error');
                       $('.error-email').text('Принято')
                                                 .css('color','green')
                                                 .animate({'paddingLeft':'10px'},400)
                                                 .animate({'paddingLeft':'5px'},400);
                     
                 }else {
                        $(this).removeClass('not_error').addClass('error');
                       $('.error-email').html('&bull; поле "Email" обязательно для заполнения<br> &bull; поле должно содержать правильный email-адрес<br> (например: example123@mail.ru)')
                                                  .css('color','red');
                    
                 
                 }
                 break;
                 
                    //проверка пароля
                 case 'password':
                     
                 
                 if ( val!= '' && val.length>2){
                    
                       $(this).addClass('not_error');
                       $('.error-password').text('Принято')
                                                 .css('color','green')
                                                 .animate({'paddingLeft':'10px'},400)
                                                 .animate({'paddingLeft':'5px'},400);
                     
                 }else {
                        $(this).removeClass('not_error').addClass('error');
                       $('.error-password').html('&bull; поле "Пароль" обязательно для заполнения<br> &bull; длина пароля должна составлять не менее двух символов')
                                                  .css('color','red');
                    
                 
                 }
                 break;
                 
         } //конец свитча
     }); //конец фокуса
      
      //нажатие кнопки
      $('form#forma').submit(function(e){ 
          //поведение кнопки
          e.preventDefault();
          //если все верно
          if($('.not_error').length == 4){
               $.ajax({
                        //отправка
                        url: 'test.php',
                        type: 'post',
                        data: $(this).serialize(),

                       success: function(response){
                            //убираем значения после отпрвки
                            
                            
                           
                            $('#name').val('').removeClass();
                            $('#number').val('').removeClass();
                            $('#email').val('').removeClass();
                            $('#password').val('').removeClass();
                            
                            $('.error-name').text('');
                            $('.error-number').text('');
                            $('.error-email').text('');
                            $('.error-password').text('');
                           //вывод данных в посте
                           alert(response);
                       }
                }); 
          }else
            {
                //возвращаем фолс если отправка не произошла
              return false;
            }
      });//конец обработки нажатия
      
  });//конец скрипта