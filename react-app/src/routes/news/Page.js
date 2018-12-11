import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import basket from "../../images/basket.jpg"
import soobasa from "../../images/soobasa.jpg"
import Grid from "react-bootstrap/es/Grid";
import Main from "./Main";
import Extra from "./Extra";
import {Flex, Box} from 'reflexbox';
export default class Page extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

            comments: [{text: "Very Good"}, {text: "Good"}],

            title_: "علی دایی کاپ قهرمانی را برد",
            date: "سه شنبه، 14 آذر ماه",
            sources: ["لولو", "خبرگذاری ایسنا"],
            text_of_news: "سوباسا",
            imageaddresses: [{soobasa}, {basket}, {basket}, {basket}],
            video: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
            tags: ["tag1", "tag2", "tag3"],
            related_news: [
                {
                    title_: "Tilte of news1",
                    image_address: {soobasa}
                },
                {
                    title_: "Tilte of news2",
                    image_address: {soobasa}
                },
                {
                    title_: "Tilte of news3",
                    image_address: {soobasa}
                },
            ],

            latest_news: [
                {
                    title_: "Tilte of news1",
                    image_address: {soobasa}
                },
                {
                    title_: "Tilte of news2",
                    image_address: {soobasa}
                },
                {
                    title_: "Tilte of news3",
                    image_address: {soobasa}
                },
            ],
            related_teams: [
                {
                    team_id: 9,
                    team_name: "استقلال"
                },
                {
                    team_id: 19,
                    team_name: "پرسپولیس"
                },
            ],
            related_players: [
                {
                    player_id: 3,
                    player_name: "علیرضا",
                    player_familyname: "بیرانوند"
                },
                {
                    player_id: 4,
                    player_name: "علیرضا",
                    player_familyname: "بیرانوند"
                },
                {
                    player_id: 7,
                    player_name: "علیرضا",
                    player_familyname: "بیرانوند"
                },
            ]

        }
    }

    render() {
        return (
            <div>
                <h1 style={{
                    // fontSize: '130px',
                    textAlign: 'center',
                    fontStyle: 'italic',
                    margin: '40px'
                }}>{this.state.title_} </h1>
                <h3 style={{
                    // fontSize: '130px',
                    textAlign: 'center',
                    fontStyle: 'italic',
                    margin: '40px'
                }}>{this.state.date}</h3>
                {/*</marquee>*/}
                <Flex p={1} wrap>
                    <Box >

                            <Main
                                sources={this.state.sources}
                                text_of_news={this.state.text_of_news}
                                imageaddresses={this.state.imageaddresses}
                                video={this.state.video}
                                tags={this.state.tags}
                                comments={this.state.comments}

                                related_players={this.state.related_players}
                                related_teams={this.state.related_teams}

                            />
                    </Box>
                        <Box >
                            <Extra
                                related_news={this.state.related_news}
                                // related_players={this.state.related_players}
                                // related_teams={this.state.related_teams}
                                latest_news={this.state.latest_news}
                            />

                    </Box>
                </Flex>
            </div>
        );
    }
}