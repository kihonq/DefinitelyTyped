import GLImage from "gl-react-image";
import * as React from "react";

const App = () => (
    <div>
        <GLImage source="http://i.imgur.com/tCatS2c.jpg" resizeMode="stretch" />
        <GLImage source="http://i.imgur.com/tCatS2c.jpg" resizeMode="stretch" />
        <GLImage source="http://i.imgur.com/tCatS2c.jpg" resizeMode="contain" />
        <GLImage source="http://i.imgur.com/tCatS2c.jpg" resizeMode="cover" />
        <GLImage source="http://i.imgur.com/tCatS2c.jpg" resizeMode="cover" zoom={0.5} />
        <GLImage source="http://i.imgur.com/tCatS2c.jpg" resizeMode="cover" zoom={0.44} center={[1, 0.55]} />
    </div>
);

const element = document.createElement("div");
document.body.appendChild(element);
