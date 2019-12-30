import React from 'react'
import {
  useParams
} from "react-router";

export default function PostFromParams() {
    let { id } = useParams();

    return (
        <div>
            <h3>ID: {id}</h3>
        </div>
    );
}
