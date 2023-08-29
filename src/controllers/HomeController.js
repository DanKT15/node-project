import express from "express"
import homeModel from "../services/homeModel"

const getHome = (req, res) => {
    let name = req.params.namepage // nhân param
    res.render('home', {data: {tilte:name}})
}

const getAbc = async (req, res) => {
    let list = await homeModel.getall() // call model

    res.render('abc', {data: {name:'ABC Page', rows:list}})
}

export default {getHome, getAbc}