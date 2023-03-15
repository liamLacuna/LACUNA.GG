import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-1NHgzGpTfLIQCNWS7sNFkHOq",
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);
