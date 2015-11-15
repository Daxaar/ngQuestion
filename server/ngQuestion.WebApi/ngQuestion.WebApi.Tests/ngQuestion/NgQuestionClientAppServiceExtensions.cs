using System;
using System.Net.Http;
using Microsoft.Azure.AppService;

namespace NgQuestion.WebApi.Tests
{
    public static class NgQuestionClientAppServiceExtensions
    {
        public static NgQuestionClient CreateNgQuestionClient(this IAppServiceClient client)
        {
            return new NgQuestionClient(client.CreateHandler());
        }

        public static NgQuestionClient CreateNgQuestionClient(this IAppServiceClient client, params DelegatingHandler[] handlers)
        {
            return new NgQuestionClient(client.CreateHandler(handlers));
        }

        public static NgQuestionClient CreateNgQuestionClient(this IAppServiceClient client, Uri uri, params DelegatingHandler[] handlers)
        {
            return new NgQuestionClient(uri, client.CreateHandler(handlers));
        }

        public static NgQuestionClient CreateNgQuestionClient(this IAppServiceClient client, HttpClientHandler rootHandler, params DelegatingHandler[] handlers)
        {
            return new NgQuestionClient(rootHandler, client.CreateHandler(handlers));
        }
    }
}
