import React, { Component } from "react";
import css from "./Event.module.scss";
import Headermenu from "../../genericComponents/Headermenu/Headermenu";
import Hero from "../../genericComponents/Hero/Hero";
import TeacherCard from "../TeacherCard/TeacherCard";
import Element from "../../genericComponents/Element/Element";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { RichTextToHTML } from "../../../functions/storyBlokRichTextRenderer";

export default class Event extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div {...storyblokEditable(this.props.blok)}>
				<Headermenu blok={this.props.menu.content}></Headermenu>
				<main>
					<Hero blok={this.props.blok} contentTypeTag="event" />
					<div className={css["event-page__main-content"]}>
						<div id="event-page__short-description" key="event-page__short-description" className={css["event-page__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
								<h2 className={css["rich-text-section__title"]}>What to expect</h2>
								<div className={css["rich-text-section__rich-text"]}>{RichTextToHTML({ document: this.props.blok.description })}</div>
							</section>
						</div>

						<div id="event-page__short-description" key="event-page__short-description" className={css["event-page__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
								{this.props.blok.additionalstuff && this.props.blok.additionalstuff.map((nestedBlok) => (
									<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
								))}
							</section>
						</div>
					</div>
				</main>
			</div>
		);

	}
}