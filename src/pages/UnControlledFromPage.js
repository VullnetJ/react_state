import React, {createRef} from 'react'

export const UnControlledFormPage = () => {

    const nameInput = createRef();
    const emailInput = createRef();
    const favoriteColorInput = createRef();

    return (
        <form>
            <h2>Please enter your information</h2>
            <div>
                <input 
                    ref={nameInput}
                    type="text" 
                    placeholder="Name"
                   
                />
            </div>
            <div>
                <input 
                ref={emailInput}
                type="text" 
                placeholder="Email"  
                />
            </div>
            <div>
                <input 
                ref={favoriteColorInput}
                type="text" 
                placeholder="Favorite Color" 

                />
            </div>
            <button onClick={e => {
                alert(`
                    Your name is ${nameInput.current.value},
                    Your email is ${emailInput.current.value},
                    Your favorite color is: ${favoriteColorInput.current.value},
                `);
                e.preventDefault();
            }}>Submit</button>
        </form>
    )
}