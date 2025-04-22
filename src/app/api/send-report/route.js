import { Report } from "@/app/models/ReportModels";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const form = await req.formData();
    const reportData = {};

    form.forEach((value, key) => {
      if (reportData[key]) {
        // برای فیلدهای چندتایی مثل photos یا category
        if (Array.isArray(reportData[key])) {
          reportData[key].push(value);
        } else {
          reportData[key] = [reportData[key], value];
        }
      } else {
        reportData[key] = value;
      }
    });

    await Report.create(reportData);

    return NextResponse.json({ message: "گزارش شما افزوده شد" }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "خطایی رخ داد" }, { status: 500 });
  }
}
