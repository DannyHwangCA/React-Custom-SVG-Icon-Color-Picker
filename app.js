(function() {
    "use strict";
    
    function Icon(props) {
      return (
        <i class='custom-icon fas fa-heartbeat'></i>
      );
    }
    
    function ColorWell(props) {
      return (
        <div className="color-input-container">
          <input class="color-input" type="color" value="#ffadff" />
        </div>
      );
    }
    
    function IconCustomizer(props) {
      return (
        <div className="outer-icon-container">
          <div className="inner-icon-container">
            <Icon />
            <ColorWell />
          </div>
        </div>
      );
    }
    
    ReactDOM.render(<IconCustomizer />, document.getElementById('app'));
})();
  