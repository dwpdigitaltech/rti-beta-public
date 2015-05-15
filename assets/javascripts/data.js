(function () {
  'use strict';

  var bindEvents = function () {
    var appTitle    = document.querySelector('#proposition-name');

    appTitle.addEventListener('click', function (e) {
      sessionStorage.removeItem('nino')
      sessionStorage.removeItem('duration');
    })

    $('summary').click(function() {
      $(this).next('div').toggleClass('hide')
    })

    //modals
    $('.deductions').on('click',function () {
      var date      = $(this).data('date'),
          deduction = $(this).data('deduction'),
          tax       = $(this).data('tax'),
          nic       = $(this).data('nic'),
          pension   = $(this).data('pensioncontribution');

      if (tax < 0) {
          tax = '<span class="error-text">' + tax + '</span>';
      }
      if (tax) {
          var modalText = '<p class="font-xsmall">Date Paid: ' + date + '</p>'
                        + '<p class="font-xsmall">Tax: ' + tax + '</p>'
                        + '<p class="font-xsmall">National Insurance Contribution: ' + nic + '</p>'
                        + '<p class="font-xsmall">Pension: ' + pension + '</p>';
      } else {
        var modalText = '<p class="font-xsmall">Date Paid: ' + date + '</p>'
                      + '<p class="font-xsmall">Tax: ' + deduction + '</p>';
      }

      $('.modal-body').empty().append(modalText);
      $('#deductions-modal').modal('show');
      return false;
    });

    $('.date-range-change').click(function () {
      var showThis = $(this).data('content');

      $('#date-range li').removeClass('selected')
      $('.earnings-data-cont').removeClass('show').addClass('hide')

      $(this).parent().addClass('selected')
      $('#' + showThis).addClass('show')

      return false;
    })

  };

  return {
    bindEvents : bindEvents()
  };
})();
