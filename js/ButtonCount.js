class ButtonCount extends HTMLElement {
            constructor() {
                super();
                let btn = document.createElement('button');
                btn.innerHTML = 'Times Clicked : ';
 
                // Create an output to hold the count
                let count = document.createElement('output');
                count.textContent = 0;
                btn.append(count);
                let slot = document.createElement('slot');
                btn.append(slot);
                btn.addEventListener('click', () => {
                    let currVal = Number(count.textContent);
                    count.textContent = currVal + 1;
                });

                this.attachShadow({ mode: 'open' });
                this.shadowRoot.append(btn);
            }
        }

        // Define the custom element in the registry
        customElements.define('button-count', ButtonCount);

        new ButtonCount();
    