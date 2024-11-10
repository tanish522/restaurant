import React from "react";

function Home() {
    return (
        <div>
            <h1>This is Home Page</h1>
            <div style={{ width: "100%", height: "300px", overflow: "hidden" }}>
                {/* Banner Image from Lorem Picsum */}
                <img
                    src="https://picsum.photos/1200/300"
                    alt="Banner"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </div>
        </div>
    );
}

export default Home;
