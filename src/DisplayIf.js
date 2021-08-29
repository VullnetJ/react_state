

export const DisplayIf = ({condition, children}) => {
    return condition 
    ? children
    : null;

}


/* <DisplayIf condition={true}>
    <ComponentIfTrue />
</DisplayIf> */