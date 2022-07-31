/* CSS use to help WCs + showing basic ideas of graceful degradation TODO: add in a pulser script in CSS to show loader TODO: use a setTimeout to register the component to simulate a slow load TODO: CSS to transition out Starting to point at the possibility
        of progressive enhancement even with JS heavy ideas TODO: use the slot element to show its use TODO: explore the use of is attribute and extending other element types TODO: Reflect state into attributes esp data- ones like data-count Making sure
        to address more complexity with WCs and understand element lifecycle TODO: Add an attribute and watch it for changes ex: color="red" TODO: use template strings or <template> to show a different creational pattern
     */
class ButtonCount extends HTMLElement {

    // <style> output {color: red;} button {background: green;} </style>
    constructor() {
        super();

        // multiple ways we could do things from direct DOM methods here, to template tags you clone, to template strings you instantiate - all have their place, but this is direct and easy

        // Create a button element
        let btn = document.createElement('button');
        btn.innerHTML = 'Times Clicked : ';
        // Idea: replace the setting above of the string with the slot text
        // then if we could just extend the button we could probably drop that too

        // Create an output to hold the count
        let count = document.createElement('output');

        count.textContent = 0;

        btn.append(count);

        // add the slot in
        let slot = document.createElement('slot');
        btn.append(slot);

        // Update the count when the button is clicked
        btn.addEventListener('click', () => {
            let currVal = Number(count.textContent);
            count.textContent = currVal + 1;
        });

        // Attach and open up shadow tree and add the button to it
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.append(btn);
    }
}

// Define the custom element in the registry
customElements.define('button-count', ButtonCount);