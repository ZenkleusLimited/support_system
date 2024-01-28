import { apiSlice } from "./apiSlice";
import { user, luser, afiliate, lafiliate, school, lschool, schoolUpdate, visits, affilaiteSchool, notification } from "../types";

export const appApiEndpoints = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<user,luser>({
      query: (credentials) => ({
        url: "user/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    getUsers: builder.query<afiliate, lafiliate>({
      query: (credentials) => ({
        url: credentials.id ? `user/affiliates/${credentials.id}` : "user/affiliates/",
        providesTags: ["Users"],
      })
    }),
    createUser: builder.mutation<lschool, afiliate>({
      query: (credentials) => ({
        url: "user/register",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: ["Users"]
    }),
    createSchool: builder.mutation<lschool, school>({
      query: (credentials) => ({
        url: "user/schools",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: ["Schools"]
    }),
    getSchools: builder.query<school[], lafiliate>({
      query: (credentials) => ({
        url: credentials.id ? `user/schools/${credentials.id}` : "user/schools/",
        providesTags: ["Schools"],
      })
    }),
    updateSchool: builder.mutation<lschool, schoolUpdate>({
      query: (credentials) => ({
        url: `user/schools/${credentials.id}`,
        method: "PUT",
        body: {...credentials}
      }),
      invalidatesTags: ["Schools"]
    }),
    createVisit: builder.mutation<lschool, visits>({
      query: (credentials) => ({
        url: "user/visits",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: ["Visits"]
    }),
    getVisits: builder.query<{ visits: visits[] }, lafiliate>({
      query: (credentials) => ({
        url: credentials.id ? `user/visits/${credentials.id}` : "user/visits/",
        providesTags: ["Visits"],
      })
    }),
    getAffiliateSchools: builder.query<{ schools: school[] }, lafiliate>({
      query: (credentials) => ({
        url: credentials.id ? `user/affiliate/schools/${credentials.id}` : "user/affiliate/schools",
        providesTags: ["Schools"],
      })
    }),
    createAffiliateSchool: builder.mutation<lschool, affilaiteSchool>({
      query: (credentials) => ({
        url: "user/affiliate/register-school",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: ["Visits"]
    }),
    deleteVisit:builder.mutation<lschool, string>({
      query: (credentials) => ({
        url:`user/visits/${credentials}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Visits"]
    }),
    getSingleVisit: builder.query<{ visit: visits }, lafiliate>({
      query: (credentials) => ({
        url: `user/visit/${credentials.id}`,
        providesTags: ["Visits"],
      })
    }),
    saveNotification: builder.mutation<lschool, notification>({
      query: (credentials) => ({
        url: "user/notification",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: ["Notifications"]
    }),
    getNotifications: builder.query<{ notifications: notification[] }, lafiliate>({
      query: (credentials) => ({
        url: `user/notification/${credentials.id}`,
        providesTags: ["Notifications"],
      })
    }),
    deleteNotification:builder.mutation<lschool, string>({
      query: (credentials) => ({
        url:`user/notification/${credentials}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Notifications"]
    }),
  }),
});
// 
export const {
  useLoginMutation,
  useGetUsersQuery,
  useCreateSchoolMutation,
  useUpdateSchoolMutation,
  useGetSchoolsQuery,
  useCreateUserMutation,
  useCreateVisitMutation,
  useGetVisitsQuery,
  useGetAffiliateSchoolsQuery,
  useCreateAffiliateSchoolMutation,
  useDeleteVisitMutation,
  useGetSingleVisitQuery,
  useDeleteNotificationMutation,
  useGetNotificationsQuery,
  useSaveNotificationMutation,
} = appApiEndpoints;
