class CompareItems extends HTMLElement {
  connectedCallback(){
    let rangeInput = document.createElement('input')
    rangeInput.type = 'range'
    this.append(rangeInput)

    this.addEventListener('input', inputEvent => {
      if(inputEvent.target.matches('input[type="range"]')){
        this.style.setProperty('--pos', inputEvent.target.value + '%')  
      }
    })
  }
}

export {CompareItems}
customElements.define('compare-items', CompareItems)
