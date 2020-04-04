(function() {
    "use strict";
    
    function ColorWell(props) {
      return (
        <div className="color-input-container">
          <i class='custom-icon fas fa-heartbeat' style={{color: props.inputvalue}}></i>
          <p>
            <b>Color Choice</b>
          </p>
          <input class="color-input" type="color" value={props.inputvalue} />
        </div>
      );
    }
  
    function IconCustomizer(props) {
      return (
        <div className="outer-icon-container">
          <div className="inner-icon-container">
            <ColorWell inputvalue="#ffadff"/>
          </div>
        </div>
      );
    }
    
  ReactDOM.render(<IconCustomizer />, document.getElementById('app'));
  })();