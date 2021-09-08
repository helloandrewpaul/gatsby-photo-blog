import React from 'react'
import {Link} from 'gatsby';
import Layout from '../Components/Layout'
import Head from "../Components/head"


const NotFound = () => {
	return (
		<Layout>
			<Head title="You fucked up buddy" />
			<h1>It's a 404, you fucked up. Now <Link to="/">Go Home</Link></h1>
		</Layout>
	)
}

export default NotFound
