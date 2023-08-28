import { Schema } from "mongoose"; 
const AssignmentSchema = new Schema({
title: {
    type: String,
    required: true,
},
createdAt: {
    type: Date,
    default: Date.now
},
user:{
    type: moongose.Schema.Types.ObjectId,
    ref: 'Teachers'
},
});
export const assighnmentModel = mongoose.model('assighnment',AssignmentSchema); 