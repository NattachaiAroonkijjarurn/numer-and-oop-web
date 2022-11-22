import React from "react";
import './Home.css';

export default function Home() {
    return ( 
        <div style={{width:'1150px',backgroundColor: '#4158D0',backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'}}> 
            <h1 style = {{ color: '#fff', paddingLeft: '220px', paddingTop: '75px',textShadow: '5px 5px #ff0000', fontSize:'70px'}} > Welcome To This Site </h1>  
            <h3 style = {{ color: 'black', paddingLeft: '360px', paddingTop: '55px' }} > This site for Numerical Project </h3>  
            <h3 style = {{ color: 'black', paddingLeft: '365px', paddingTop: '55px' }} > What does this website offer ? </h3>  
            <table class="contain" style={{paddingTop:'50px'}}>
                <thead>
                    <tr>
                        <th><h4>Root of Equation</h4></th>
                        <th><h4>Linear System</h4></th>
                        <th><h4>Interpolation</h4></th>
                        <th><h4>Extrapolation</h4></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="/Bisection" style={{textDecoration:'none',color:'#fff'}}>Bisection</a></td>
                        <td><a href="/cramerrule" style={{textDecoration:'none',color:'#fff'}}>Cramer's Rule</a></td>
                        <td><a href="/NewtonDivided" style={{textDecoration:'none',color:'#fff'}}>Newton Divided Difference</a></td>
                        <td><a href="/linearregression" style={{textDecoration:'none',color:'#fff'}}>Linear Regression</a></td>
                    </tr>
                    <tr>
                        <td><a href="/Falseposition" style={{textDecoration:'none',color:'#fff'}}>False Position</a></td>
                        <td><a href="/gausselimination" style={{textDecoration:'none',color:'#fff'}}>Gauss Elimination</a></td>
                        <td><a href="/largrange" style={{textDecoration:'none',color:'#fff'}}>Lagrange</a></td>
                        <td><a href="/polynomial" style={{textDecoration:'none',color:'#fff'}}>Polynomail Regression</a></td>
                    </tr>
                    <tr>
                        <td><a href="/OnePointiteration" style={{textDecoration:'none',color:'#fff'}}>One Point Iteratio</a></td>
                        <td><a href="/gaussjordan" style={{textDecoration:'none',color:'#fff'}}>Gauss Jordan</a></td>
                        <td></td>
                        <td><a href="/MultipleLinear" style={{textDecoration:'none',color:'#fff'}}>Multiple Linear Regression</a></td>
                    </tr>
                <tr>
                        <td><a href="/NewtonRaphson" style={{textDecoration:'none',color:'#fff'}}>Newton Raphson</a></td>
                        <td><a href="/jacobi" style={{textDecoration:'none',color:'#fff'}}>Jacobi Iteration</a></td>
                        <td></td>
                        <td></td>
                    </tr>
                <tr>
                        <td><a href="/Secant" style={{textDecoration:'none',color:'#fff'}}>Secant</a></td>
                        <td><a href="/gaussseidel" style={{textDecoration:'none',color:'#fff'}}>Gauss Seidel</a></td>
                        <td></td>
                        <td></td>
                    </tr>
                <tr>
                        <td></td>
                        <td><a href="/conjugategradient" style={{textDecoration:'none',color:'#fff'}}>Conjugrate Gradient</a></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}