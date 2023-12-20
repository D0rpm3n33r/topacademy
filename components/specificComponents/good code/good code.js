import React, { Component } from "react";
import css from "./Events.module.scss";
import Headermenu from "../../genericComponents/Headermenu/Headermenu";
import Hero from "../../genericComponents/Hero/Hero";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import {RichTextToHTML} from "../../../functions/storyBlokRichTextRenderer";

export default class Events extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<div {...storyblokEditable(this.props.blok)} className={css["experienceitem"]}>
					<Headermenu blok={this.props.menu.content}></Headermenu>
					<main>
						<Hero blok={this.props.blok} contentTypeTag="course" />
						<div className={css["experienceheader"]}>
							<span className={css["experiencedate"]}>{this.props.blok.startdate} - {this.props.blok.enddate}</span>
							<span className={css["experiencetitle"]}>{this.props.blok.title}</span>
						</div>
						<div className={css["experienceitemcontent"]}>
							{RichTextToHTML({ document: this.props.blok.description })}
						</div>
					</main>
				</div>
			</>
		);
	}
}