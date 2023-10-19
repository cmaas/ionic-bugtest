import { Component, Fragment, Prop, h } from '@stencil/core';

@Component({
    tag: 'page-profile',
    styleUrl: 'page-profile.css',
    // shadow: true,
})
export class PageProfile {

    @Prop() name: string = '';

    render() {
        return (
            <Fragment>
                <ion-header>
                    <ion-toolbar color="primary">
                        <ion-buttons slot="start">
                            <ion-back-button defaultHref="/tab/notice"></ion-back-button>
                        </ion-buttons>
                        <ion-title>Profile {this.name}</ion-title>
                    </ion-toolbar>
                </ion-header>
                <ion-content fullscreen class="ion-padding">
                    <ion-card>
                        <ion-card-content>
                            See title
                        </ion-card-content>
                    </ion-card>
                </ion-content>
            </Fragment>
        );
    }
}
