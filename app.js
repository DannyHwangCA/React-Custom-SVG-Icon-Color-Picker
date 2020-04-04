(function() {
    "use strict";
    
function Icon(props) {
    return (
    <i class='fas fa-heartbeat'></i>
    ) 
}

function IconCustomizer(props) {
    return (
    <div className="outer-icon-container">
        <div className="inner-icon-container">
        <Icon />
        </div>
    </div>
    )
}

ReactDOM.render(<IconCustomizer />, document.getElementById('app'));
})();
  