import React from 'react'
import * as d3 from "d3";
import './GenderDistribution.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

function GenderDistribution(){
      return(
          <div id='pieChart'>
          <Link className="btn btn-success GoHome" to="/">Go to home</Link>
          {getData()}
    </div>
)} 

const getData=()=>{
    let genderData=[]
    let nbrMale
    let nbrFemale
    const url = "http://localhost:2222/backend/GetGender.php" //url of server
      axios.get(url)
      .then(res=>{
          //get data from server
        genderData=res.data
        //get number of male and female
        nbrMale=res.data.Male
        nbrFemale=res.data.Female
        /*size of pie chart */
        let width=600
        let height=500
        //append the svg object to the div called 'pieChart'
        var svg=d3.select("#pieChart").append('svg')
        .attr('width', width).attr('height', height)
        .style('background', 'Snow')
        let details=[{sexe:'Male',number:nbrMale}, {sexe:'Female', number:nbrFemale}] //values of pie chart
        //generate the pie chart
        let data=d3.pie().sort(null).value(function(d){return d.number})(details)
         //set the color scale
        let colors=d3.scaleOrdinal().domain(details).range([ "#FF4500","#000000"])

        //generate arcs and specify properties of pie chart
        let segments=d3.arc()
        .innerRadius(0)
        .outerRadius(200)
        .padAngle(.05)
        .padRadius(50)
        let sections = svg.append('g').attr('transform','translate(250,250)')
        .selectAll('path').data(data)
  
        sections.enter().append('path').attr('d',segments).attr('fill', function(d){return colors(d.data.number)})
        let content=d3.select('g').selectAll('text').data(data)
        content.enter().append('text').classed('inside',true).each(function(d)
        {
            let center=segments.centroid(d)
            //generate number of each gender and put it in the pie chart
            d3.select(this).attr('x',center[0]).attr('y',center[1])
            .text(d.data.number)

            let legends=svg.append('g').attr('transform','translate(500,100)')
            .selectAll('.legends').data(data)

             let legend = legends.enter().append('g').classed('legends',true)
            .attr('transform', function(d,i){return 'translate(0,'+(i+1)*30+')'})

            //generate squares with color base on color gender
            legend.append('rect').attr('width',20).attr('height',20).attr('fill',function(d){return colors(d.data.number)})
            //generate label of each gender
            legend.append('text').classed('label',true).text(function(d){return d.data.sexe})
            .attr('fill',function(d){return colors(d.data.number)})
            .attr('x',24)
            .attr('y',15)
        })
      })
    }
export default GenderDistribution