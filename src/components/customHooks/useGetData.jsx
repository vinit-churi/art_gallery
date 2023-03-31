import React, { useState, useEffect } from "react";

const featureArtist =
    "https://api.artsy.net/api/artists/4d8b92b34eb68a1b2c0003f4";
const similarArtist =
    "https://api.artsy.net/api/artists?similar_to_artist_id=4d8b92b34eb68a1b2c0003f4";
const featureArtworks = "https://api.artsy.net/api/artworks";
// const featureCollection = "";
const useGetData = () => {
    const fetchToken = async () => {
        try {
            const fetchOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            };
            let token = localStorage.getItem("token");
            if (token === null) {
                let query = await fetch(
                    "https://api.artsy.net/api/tokens/xapp_token?client_id=fc9d9fc31b0f552b0c99&client_secret=11e5fba9c65887a7c4645de1aeb409dc",
                    fetchOptions
                );
                const { token } = await query.json();
                localStorage.setItem("token", token);
                return token;
            }
            return token;
        } catch (error) {
            console.error(error);
        }
    };
    const fetchArtist = async (token) => {
        const fetchOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Xapp-Token": token,
            },
        };
        const query = await fetch(featureArtist, fetchOptions);
        return query.json();
    };
    const fetchSimilarArtist = async (token) => {
        const fetchOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Xapp-Token": token,
            },
        };
        const query = await fetch(similarArtist, fetchOptions);
        return query.json();
    };
    const fetchHomeData = async () => {
        try {
            const token = await fetchToken();
            // const artistsData = await fetchArtist(token);
            const similarArtistData = await fetchSimilarArtist(token);
            const {
                _embedded: { artists },
            } = similarArtistData;
            // console.log(artists);
            return artists;
        } catch (error) {
            console.error(error);
        }
        return null;
    };
    // useEffect(() => {
    //     fetchHomeData().then((data) => console.log("look here", data));
    // }, []);
    return [fetchHomeData];
};

export default useGetData;
