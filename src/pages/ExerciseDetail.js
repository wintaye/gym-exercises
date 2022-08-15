import React, { useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import { Box } from "@mui/material";
import Detail from '../components/Detail';
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

import {exerciseOptions, fetchData, youtubeOptions} from "../utils/fetchData";


const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const { id } = useParams();

    //recall useEffect func called whenever [id] changes
    useEffect(() => {
        // window.scrollTo({ top: 0, behavior: 'smooth' });

            const fetchExercisesData = async () => {
                const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
                const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

                const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);

                setExerciseDetail(exerciseDetailData);

                const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?q=${exercise}, youtubeOptions);
                

            };

            fetchExercisesData();
        }, [id]);


        if (!exerciseDetail) return <div>No Data</div>;

        return (
            <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
                <Detail exerciseDetail={exerciseDetail}/>
                <ExerciseVideos />
                <SimilarExercises />
            </Box>
        );
    };


export default ExerciseDetail