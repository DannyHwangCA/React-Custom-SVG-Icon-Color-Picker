(function() {
    "use strict";
    
    function ColorWell(props) {
      function onColorChange(evt) {
        props.handleColorChange(evt.target.value);
      }
      
      return (
        <div className="color-input-container">
          <i class='custom-icon fas fa-heartbeat' style={{color: props.inputvalue}}></i>
          <p>
            <b>Color Choice</b>
          </p>
          <input class="color-input" type="color" value={props.inputvalue} onChange={onColorChange} />
        </div>
      );
    }
  
    function IconCustomizer(props) {
      var [color, setColor] = React.useState("#ffadff")
      
      function handleColorChange(selectedColor) {
        setColor([selectedColor]);
      }
      
      return (
        <div className="outer-icon-container" style={{backgroundColor: color }}>
          <div className="dark-overlay">
            <div className="inner-icon-container">
              <ColorWell inputvalue={color} handleColorChange={handleColorChange}/>
            </div>
          </div>
        </div>
      );
    }
    
  ReactDOM.render(<IconCustomizer />, document.getElementById('app'));
  })();
  