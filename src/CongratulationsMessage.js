

export const CongratulationsMessage = ({ threshold, onHide}) => {
   
    return (
        <>
        <h2>Congratulations! You've reached {threshold} number of clicks </h2> 
        <button onClick={onHide}>Hide</button>
        </>
    )      

}