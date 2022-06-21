import React, { useState, useEffect } from 'react';

const UseEffectComp = () => {

    const [value, setValue] = useState(1);
    const [visible, setVisible] = useState(true);

    if (visible) {
        return (
            <div>
                <button onClick={() => { setValue((s) => s + 1) }}>Add</button>
                <button onClick={() => { setVisible(false) }}>Hide</button>
                {/* <ClassCounter value={value}></ClassCounter> */}
                {/* <HookCounter value={value}></HookCounter> */}
                {/* <Notification></Notification> */}
                <PlanetInfo id={value}></PlanetInfo>
            </div>
        );
    }

    return (
        <button onClick={() => { setVisible(true) }}>Show</button>
    );
}

const PlanetInfo = ({ id }) => {
    const [name, setName] = useState('');
    useEffect(() => {
        let cancelled = false;
        fetch(`https://swapi.dev/api/planets/${id}/`)
            .then(res => res.json())
            .then(data => !cancelled && setName(data.name));
        return () => cancelled = true;
    }, [id]);

    return (
        <div>
            {id} - {name}
        </div>
    );
}

class ClassCounter extends React.Component {

    componentDidMount() { console.log('Mount'); }
    componentDidUpdate() { console.log('Update'); }
    componentWillUnmount() { console.log('Unmount'); }

    render() {
        return (
            <div>{this.props.value}</div>
        );
    }

}

const HookCounter = ({ value }) => {

    useEffect(() => {
        console.log('useEffect');

        return () => { console.log('clear'); }
    }, [value]);

    return (
        <div>{value}</div>

    );
}

const Notification = () => {

    const [visible, setVisible] = useState(true);


    useEffect(() => {
        const timeout = setTimeout(() => { setVisible(false) }, 3000);

        return () => { clearTimeout(timeout); }
    }, []);


    if (visible) {
        return (
            <div><p>Hello</p></div>
        );
    }
    return null;

}

export default UseEffectComp;