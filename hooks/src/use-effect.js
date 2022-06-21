import React, { useState, useEffect, useCallback, useMemo } from 'react';

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

const getPlanet = (id) => {
    return fetch(`https://swapi.dev/api/planets/${id}/`)
        .then(res => res.json())
        .then(data => data);
}

const useRequest = (request) => {
    const initialState = useMemo(() => ({ data: null, loading: true, error: null }), []);
    const [dataState, setDataState] = useState(initialState);

    useEffect(() => {
        setDataState(initialState)
        let cancelled = false;
        request()
            .then(data => !cancelled && setDataState({ data: data, loading: false, error: null }))
            .catch(error => !cancelled && setDataState({ data: null, loading: false, error: error }));
        return () => cancelled = true;
    }, [request]);
    return dataState;
}

const usePlanetinfo = (id) => {
    const request = useCallback(() => getPlanet(id), [id]);
    return useRequest(request);
}

const PlanetInfo = ({ id }) => {
    const { data, loading, error } = usePlanetinfo(id);
    if (error) {
        return <div>Something is wrong</div>
    }
    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {id} - {data.name}
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