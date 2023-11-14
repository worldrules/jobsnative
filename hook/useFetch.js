import { useState, useEffect } from "react";
import axios from 'axios'

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const axios = require('axios');

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 'd657b4387emsh578332beabad1f7p17f2cdjsnaf73e5f9f32b',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await axios.request(options)
            setData(response.data.data)
            setLoading(false)
        } catch (error) {
            setError(error)
            alert('There is an error')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        setLoading(true)
        fetchData()
    }

    return { data, loading, error, refetch }
}

export default useFetch