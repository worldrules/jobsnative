import { useState, useEffect } from "react";
import axios from 'axios'

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
}