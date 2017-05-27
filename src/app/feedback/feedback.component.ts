import { Component } from '@angular/core';
import { MyRemoteService } from '../app.myremoteservice';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html'
})

export class FeedbackComponent {
    message: string = null;
    status: string = null;
    constructor(private _remoteService: MyRemoteService) { }
    submitFeedback(email: string, feedback: string) {
        let feedbackObject = {
            "Email": email,
            "Message": feedback
        }

        this._remoteService.postName(feedbackObject)
            .subscribe(data => {
                var resp = JSON.stringify(data);
                this.message = data["Message"];
                this.status = data["Status"];
                console.log(resp);
            });

        console.log(email, feedback);
    }
}