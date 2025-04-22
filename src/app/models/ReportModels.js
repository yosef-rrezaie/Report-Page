import { model, models, Schema } from "mongoose";

const reportSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    adr: {
      type: String,
      required: true,
    },
    category: {
      type: [String],
    },
    photos: {
      type: [String],
    },
  },
  { timestamps: true }
);

const Report = models.Report || model("Report", reportSchema);
export { Report };
