import './HellowWorldButton.css';
class HelloWorldButton {
  render() {
    const button = document.createElement('button');
    button.innerHTML = 'Hello World';
    button.onclick = function () {
      const p = document.createElement('p');
      p.innerHTML = 'Hello World';
      document.body.appendChild(p);
    };
    document.body.appendChild(button);
  }
}

export default HelloWorldButton;
