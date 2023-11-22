﻿using Shared.UserDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shared.Message
{
    public class ConfirmEmailMessage
    {
        public static string Message(UserRegistrationDto user, string confirmLink)
        {
            return $"Hi, {user.FirstName},\n" +
                $"Please enter link to confirm email {user.Email}.\n" +
                $"Link: {confirmLink}\n" +
                $"Thank you";
        }
    }
}
