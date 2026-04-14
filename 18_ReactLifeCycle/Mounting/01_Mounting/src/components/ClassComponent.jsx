import React from "react";

class ClassComponent extends React.Component{
    constructor() {
        console.log('Inside constructor...');
        super();
        this.state = {
            name: "",
            age: "",
            course:""
        }

    }
    static getDerivedStateFromProps(props, state) {
        console.log("state is ", state);
        console.log("props are ", props);
        
        return {
            name: props.defaultName,
            age: props.defaultAge,
            course: props.defaultCourse
            
        }
    }
    render() {
        console.log("Inside Render....")
        return (
            <>
                <p>Name: {this.state.name}</p>
                <p>Age: {this.state.age}</p>
                <p>Course: { this.state.course}</p>
            </>
        )
    }
}
export default ClassComponent;