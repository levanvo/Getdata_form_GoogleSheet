import { google } from 'googleapis';



export const Read = async (req, res) => {

    const codeAuthor = {
        "type": "service_account",
        "project_id": "useful-monitor-396010",
        "private_key_id": "a88b8620310d28e5bacbe58e009547e716c688b6",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDIurLPEV50qTvG\n7Xy+cV8/X3BTvzMcZQUkuHEnySHwwnwNtt4WCoznIv/MKPYuQkBGoOrHUwx4LEcI\nWa1Su1wOK6E64dAcFXEdmSgU2KngPDmxz7CU+aZjay4dYH8W+Wv5X9cdk5k2036l\nLH5Lo4Ioc0XMs+sm3Hv9IHyDKqgKyxDM2nHvp/LsFQUctoM1BCjlTpZc5jo1RDDX\n5mac7vit02LcGtNK04clYmqELsnRQgOfCYKQ2v1ufnGnTW6dbwEHZSMglAmH9BB8\nJjc5SbXI3XVJv7jSC32pDy4Ud6O4a/K7arr7B4QxAk6itXDSweLP6lG3871mnos8\nheBNfPJHAgMBAAECggEAELDhlHFLyuSVmWV/BXD07BaaBwSzkc1en56MnjPN1DC/\n0v4dOnT3IXMaFRZk3hTZNmZED3363/VClNGsJWB5952uIvDK9sLbrIvjNtSLT5+C\nZqQv+TtHGCY95+hxuO3Vih9rikSPLW1prv9joxN+C7IGIE7no0wbLUGpyNhfr8Hs\nAOWLFobjZ+MD3S2V21k6vdEJF07o2ZT8jpKpYfjpBwtUb2Sa+INXqc5AAoAQg0sh\nhPeF9rtXHfXim2BnPIne/6cmPT76YRYCA5ail0Pn+LYZOR0by/N2NghdrWL1SEJc\nwvd02pP1Voi4A7kukUcOH7/ioUQ4u8ZoGx3XYsBNDQKBgQD8iJqVw7iot7kNf2Cr\nf54eCVmK+85TxDwgbqwP2Ghh6FBNyzaK0+XmErZtOb0XH6FF6zZ3A59JZHicmuKQ\ny/4XPqH+CWvLIlIum1iZMm77cXxmTWo1Q83liGjdN2vLRvfjmKAPXWbUTe5m+vzT\nbpsgJsYg32WVHw2bIPWdUL029QKBgQDLfA5A1u5siBldqZ9EBETBUJxtVU1aMVay\nXFiSEc/xdlzkIRLF4xPcKavJZKdYSzAxhOSAEM0Idz5jnFqVbfx0vY0mbyhzAgv/\nihm8GLqtuPhZsTnfTGn6zXM+A4+VfbUe+aE4x4QtFJyy8y4dE3aIFv8Dq60LaZgh\nhrJR2eImywKBgQC83pH3Bq26CcZuUOEFAupH/qgoqVFUFwT9IKixJSJUb4J33E9L\nn1VnMIGdyTwh6jcc6uEOO/hK1MjcH37p2peL3P0c2QD0qROb5fVqhmy4w9TNUoLn\nmXGJhO8g3A1TuB037HNxamK40BxIitjCbQu6DSXLeikoUVREvG7WHIeXbQKBgQC8\nGMgALe4ly0VPbG257Qw1erOu6WxglD0lEPIazHZhKV3Cz8PPwxHnsWmH+BAtMQuy\nqrqim2U8jyXP5IdjnFEDBPlGbviAH4NBy8HwOxfNYK/KEWaCwNsyqNn/mEERGivk\nHzNmDiBjn6seTGbzH7uxHzjKhtamNw0W6LFLslI4MwKBgCd4DUnDZC1pSFRge4h3\n3rlQ5xhgZNe1xAtXVFpiL8klotOsM0KN/125lHsG/yk1puhbhVz62CMV3l9PYkV3\nBqm2H+wAOtEyPadHh6iOFbRSJQQrHECU42ds7e+TCdtSgFnskHixJYPrwaOe8vdr\nzhhdZU0e+UId9O4GpxK/GJPG\n-----END PRIVATE KEY-----\n",
        "client_email": "project-1@useful-monitor-396010.iam.gserviceaccount.com",
        "client_id": "103189030119684332388",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/project-1%40useful-monitor-396010.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
    };
    const spreadsheetId = `1JIR1hxYKgzEfK-itHIgF5TAkTePGpPF9M_Ux72gNHzA`;
    // Thay đổi URL thành URL thực tế trả về tệp JSON chứa thông tin xác thực
    const auth = new google.auth.GoogleAuth({
        credentials: codeAuthor,
        scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const client = await auth.getClient();
    // const sheets = google.sheets('v4');
    const sheets = google.sheets({
        version: 'v4',
        auth: client, // Đối tượng client bạn đã tạo trước đó
    });

    const response = await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId,
        range: 'Sheet1',
    });

    const rows = response.data.values;
    if (rows.length) {
        console.log('Dữ liệu:');
        rows.forEach(row => {
            console.log(row);
        });
    } else {
        return res.status(400).json('Không có dữ liệu.');
    }
};
export const Wirite = async (req, res) => {
    const codeAuthor = {
        "type": "service_account",
        "project_id": "useful-monitor-396010",
        "private_key_id": "a88b8620310d28e5bacbe58e009547e716c688b6",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDIurLPEV50qTvG\n7Xy+cV8/X3BTvzMcZQUkuHEnySHwwnwNtt4WCoznIv/MKPYuQkBGoOrHUwx4LEcI\nWa1Su1wOK6E64dAcFXEdmSgU2KngPDmxz7CU+aZjay4dYH8W+Wv5X9cdk5k2036l\nLH5Lo4Ioc0XMs+sm3Hv9IHyDKqgKyxDM2nHvp/LsFQUctoM1BCjlTpZc5jo1RDDX\n5mac7vit02LcGtNK04clYmqELsnRQgOfCYKQ2v1ufnGnTW6dbwEHZSMglAmH9BB8\nJjc5SbXI3XVJv7jSC32pDy4Ud6O4a/K7arr7B4QxAk6itXDSweLP6lG3871mnos8\nheBNfPJHAgMBAAECggEAELDhlHFLyuSVmWV/BXD07BaaBwSzkc1en56MnjPN1DC/\n0v4dOnT3IXMaFRZk3hTZNmZED3363/VClNGsJWB5952uIvDK9sLbrIvjNtSLT5+C\nZqQv+TtHGCY95+hxuO3Vih9rikSPLW1prv9joxN+C7IGIE7no0wbLUGpyNhfr8Hs\nAOWLFobjZ+MD3S2V21k6vdEJF07o2ZT8jpKpYfjpBwtUb2Sa+INXqc5AAoAQg0sh\nhPeF9rtXHfXim2BnPIne/6cmPT76YRYCA5ail0Pn+LYZOR0by/N2NghdrWL1SEJc\nwvd02pP1Voi4A7kukUcOH7/ioUQ4u8ZoGx3XYsBNDQKBgQD8iJqVw7iot7kNf2Cr\nf54eCVmK+85TxDwgbqwP2Ghh6FBNyzaK0+XmErZtOb0XH6FF6zZ3A59JZHicmuKQ\ny/4XPqH+CWvLIlIum1iZMm77cXxmTWo1Q83liGjdN2vLRvfjmKAPXWbUTe5m+vzT\nbpsgJsYg32WVHw2bIPWdUL029QKBgQDLfA5A1u5siBldqZ9EBETBUJxtVU1aMVay\nXFiSEc/xdlzkIRLF4xPcKavJZKdYSzAxhOSAEM0Idz5jnFqVbfx0vY0mbyhzAgv/\nihm8GLqtuPhZsTnfTGn6zXM+A4+VfbUe+aE4x4QtFJyy8y4dE3aIFv8Dq60LaZgh\nhrJR2eImywKBgQC83pH3Bq26CcZuUOEFAupH/qgoqVFUFwT9IKixJSJUb4J33E9L\nn1VnMIGdyTwh6jcc6uEOO/hK1MjcH37p2peL3P0c2QD0qROb5fVqhmy4w9TNUoLn\nmXGJhO8g3A1TuB037HNxamK40BxIitjCbQu6DSXLeikoUVREvG7WHIeXbQKBgQC8\nGMgALe4ly0VPbG257Qw1erOu6WxglD0lEPIazHZhKV3Cz8PPwxHnsWmH+BAtMQuy\nqrqim2U8jyXP5IdjnFEDBPlGbviAH4NBy8HwOxfNYK/KEWaCwNsyqNn/mEERGivk\nHzNmDiBjn6seTGbzH7uxHzjKhtamNw0W6LFLslI4MwKBgCd4DUnDZC1pSFRge4h3\n3rlQ5xhgZNe1xAtXVFpiL8klotOsM0KN/125lHsG/yk1puhbhVz62CMV3l9PYkV3\nBqm2H+wAOtEyPadHh6iOFbRSJQQrHECU42ds7e+TCdtSgFnskHixJYPrwaOe8vdr\nzhhdZU0e+UId9O4GpxK/GJPG\n-----END PRIVATE KEY-----\n",
        "client_email": "project-1@useful-monitor-396010.iam.gserviceaccount.com",
        "client_id": "103189030119684332388",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/project-1%40useful-monitor-396010.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
    };
    // Thay đổi URL thành URL thực tế trả về tệp JSON chứa thông tin xác thực
    const auth = new google.auth.GoogleAuth({
        credentials: codeAuthor,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    const client = await auth.getClient();
    // const sheets = google.sheets('v4');
    const sheets = google.sheets({
        version: 'v4',
        auth: client, // Đối tượng client bạn đã tạo trước đó
    });
    // Lấy dữ liệu từ Google Sheet gốc
    const response = await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId: '1JIR1hxYKgzEfK-itHIgF5TAkTePGpPF9M_Ux72gNHzA',
        range: 'Sheet1',
    });

    const rows = response.data.values;

    // Tiến hành đẩy dữ liệu sang Google Sheet mới
    // if (rows.length) {
    const newSpreadsheetId = '1a2ywwbBy8KggmZSHqveScGmt82mxybJ5HrneuJ6LW4M'; // ID của Google Sheet mới

    await sheets.spreadsheets.values.update({
        auth: client,
        spreadsheetId: newSpreadsheetId,
        range: 'Sheet1', // Phạm vi bạn muốn đẩy dữ liệu vào
        valueInputOption: 'RAW', // Hoặc 'USER_ENTERED' nếu bạn muốn định dạng dữ liệu
        resource: {
            values: rows,
        },
    });

    console.log('Dữ liệu đã được đẩy sang Google Sheet mới.');
    // } else {
    //     return res.status(400).json('Không có dữ liệu.');
    // }
}