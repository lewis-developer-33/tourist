import {client} from './lib/client'
import { groq } from 'next-sanity'

export const getAccomodations = async () => {
    
    const data = await client.fetch(
        groq`*[_type == "accomodation"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset -> url,
            accomodation,
            description
        }`
    )
    return data
}

export const getAccomodation = async (path) => {
    console.log(path)
    const data = await client.fetch(
        groq`*[_type == "accomodation" && slug.current == ${path}][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset -> url,
            accomodation,
            description
        }`
    )
    return data
}

export const getActivities = () => {

}

export const getActivity = () => {

}
