const working = () => {
    let head = document.getElementsByTagName('head')[0]
    let script = document.createElement('script')
    let script2 = document.createElement('script')
    let script3 = document.createElement('script')
    let script4 = document.createElement('script')
    let script5 = document.createElement('script')
    let script6 = document.createElement('script')
    let script7 = document.createElement('script')
    let script8 = document.createElement('script')
    let script9 = document.createElement('script')
    let script10 = document.createElement('script')
    let script11 = document.createElement('script')
    script.async = 1
    script.src = "js/cortex2-style-switcher.js"
    script2.src = "js/cortex2-scroll.js"
    script3.src = "js/cortex2-character-waving-animations.js"
    script4.src = "js/cortex2-character-animations.js"
    script5.src = "js/cortex2-about-animation.js"
    script6.src = "js/cortex2-email-animation.js"
    script7.src = "js/cortex2-menus.js"
    script8.src = "js/cortex2-contact.js"
    script9.src = "js/cortex2-chatbot.js"
    script10.src = "js/cortex2-techniques.js"
    script11.src = "js/cortex2-introtitles.js"
    head.appendChild(script)
    head.appendChild(script2)
    head.appendChild(script3)
    head.appendChild(script4)
    head.appendChild(script5)
    head.appendChild(script6)
    head.appendChild(script7)
    head.appendChild(script8)
    head.appendChild(script9)
    head.appendChild(script10)
    head.appendChild(script11)

}
export default working