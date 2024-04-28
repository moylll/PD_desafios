/*constantes, selecionam classes declarada no index e transformam em variáveis a serem usadas e aplicadas no js*/
const title = document.querySelector('.title')
const leafL = document.querySelector('.leaf-L')
const leafR = document.querySelector('.leaf-R')
const tree = document.querySelector('.tree-layer')
const matinho1 = document.querySelector('.matinho1')
const matinho2 = document.querySelector('.matinho2')

/*exemplo do principio que faz funcionar o efeito parallax, com esse pedaço representando o teste (inspecionar > console), onde a mensagem é gerada quando tal condição é cumprida:

        document.addEventListener('scroll', function() {
            console.log('scrolled')
        })

*/

document.addEventListener('scroll', function(){
    let value = window.scrollY
    //console.log(value)
    title.style.marginTop = value * 1.1 + 'px' /*rolagem do título*/

    leafL.style.marginLeft = -value + 'px' /*rolagem da folha esquerda*/
    leafR.style.marginLeft = value + 'px ' /*rolagem da folha direita*/

    tree.style.marginBottom = -value * 0.5 + 'px' /*rolagem da árvore principal*/

    matinho1.style.marginBottom = -value * 0.02 + 'px' /*rolagem do primeiro matinho*/
    matinho2.style.marginBottom = -value * 0.05 + 'px' /*rolagem do segundo matinho*/
})