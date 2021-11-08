//Envia o formulario do item clicado
$(document).on('click', '.LinkPDFmodal', function () {

    let link = "/assets/pdf/abnt-nbr-iso-" + $(this).data('nbr') + ".pdf";
    let load = $('.container-ModalPDF');
    let modal = $('#ModalPDF');

    if ($('#pdfView')[0].data != link) {
        $('#pdfView')[0].setAttribute('data', link);        
    }
    
    $(load).html(modal);
    if (modal)
        $(modal).modal();
});


/**
 * Carrega conteúdo em um local definido e abre um modal
 * @@param Load Local onde vai ser carregado o conteúdo
 * @@param url Endereço onde sera requisitado o conteúdo
 * @@param data Dados para enviar para o servidor
 * @@param modal Modal a ser acionado
 * @@param method Metodo de envio
 */
function LoadContInDivOpenModal(Load, url, _data, modal, method = 'post') {

    $.ajax(
        {
            type: method,
            url: url,
            dataType: 'html',
            cache: false,
            async: true,
            data: _data,
            success: function (data) {
                $(Load).html(data);
                if (modal)
                    $(modal).modal();
            },
            error: function (request, status, error) {
                AlertaErro(request.responseText);
            }
        });
}