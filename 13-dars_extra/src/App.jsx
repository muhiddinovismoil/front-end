/* eslint-disable react/display-name */
// import { useRef, forwardRef } from "react";

import { Suspense } from "react";
import { lazy } from "react";

// const CustomInput = forwardRef((props, ref) => {
//     return <input ref={ref} type="text" placeholder="ForwardRef Input" />;
// });

const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App() {
    // useRef bilan oddiy inputni boshqaramiz
    // const inputRef = useRef(null);

    // // forwardRef orqali bola komponentga ref uzatamiz
    // const customInputRef = useRef(null);

    // const handleFocusUseRef = () => {
    //     console.log("useRef bilan oddiy inputga fokus berdik");
    //     if (inputRef.current) {
    //         inputRef.current.focus();
    //     }
    // };

    // const handleFocusForwardRef = () => {
    //     console.log("forwardRef orqali bolaga ref uzatdik va fokus berdik");
    //     if (customInputRef.current) {
    //         customInputRef.current.focus();
    //     }
    // };

    return (
        // <div style={{ padding: "20px" }}>
        //     <h2>useRef vs forwardRef</h2>

        //     {/* useRef bilan oddiy input */}
        //     <input ref={inputRef} type="text" placeholder="useRef Input" />
        //     <button onClick={handleFocusUseRef}>useRef Fokus</button>

        //     <br />
        //     <br />

        //     {/* forwardRef bilan custom input */}
        //     <CustomInput ref={customInputRef} />
        //     <button onClick={handleFocusForwardRef}>forwardRef Fokus</button>

        //     <br />
        //     <br />
        //     <p>Console.logni ochib qarang!</p>
        // </div>
        <div>
            <h1>React.lazy Misol</h1>
            <Suspense fallback={<p>Yuklanmoqda...</p>}>
                <HeavyComponent />
            </Suspense>
        </div>
    );
}

export default App;
