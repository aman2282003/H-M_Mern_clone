import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export const Faq = () => {
  const accordionData = [
    {
      title: "What do I need to know before signing up to the H&M membership?",
      content:
        "The membership is an all-digital loyalty program where you'll get points on all your shopping, both in store and online. You'll also get special offers, rewards, exclusive event invitations and much more. Our membership is completely free of charge but you have to be 18 years old to become a member. Your membership ID can be found on your account page.",
    },
    {
      title: "How do I collect points?",
      content:
        "All your purchases in store and online are rewarded with points. To collect points in store, always remember to scan your membership ID via the H&M app. You can also earn points by completing your profile, earning you 20 points, by recycling your garments earning you 20 points, by bringing your own bag when you shop in-store earning you 5 points, and by inviting your friends to become members. You'll earn 50 points for every new member that completes their first purchase. Your points will be displayed on your membership account which can take up to 24 hours to update.",
    },
    {
      title: "Is there a membership fee for Hello Member?",
      content:
        "No, there is no membership fee for Hello Member Loyalty program. All you need to do is visit My accounts and sign up to become a member. ",
    },
    {
      title: "Where can I find my rewards?",
      content:
        "You will receive updated information about your current offers and rewards on your account page in your H&M app or on hm.com. Please note that a redeemed discount reward cannot be returned and reused, and if you return an item the points you earned for that item will be deducted from your account.",
    },
    {
      title: "How do bonus vouchers work?",
      content:
        "Your Bonus can be applied both at the checkout online by choosing Add to Bag, or in store by choosing Use in Store. Please note that choosing Use in store will start a 30 minute count down in which the voucher must be used. The Bonus amount is spread evenly across each item in your purchase, not on the total amount. This means if you return something you will be given a refund for the amount you paid for each individual item. Bonus vouchers will not be reissued if you make a return. The Bonus amount is spread evenly across each item in your purchase, so if you return one of several items you will be given a refund for the amount that you paid for each item. Exchanges are available in store only, where you will be given an exchange for an item of the same value to the one you are returning.",
    },
    {
      title: "Why haven't I received my bonus voucher yet?",
      content:
        "The bonus voucher have a 30 days delay and will show up under My Account.",
    },
    {
      title: "For how long is my bonus valid?",
      content: "The Bonus is valid for 90 days.",
    },
    {
      title: "For how long are my points valid?",
      content:
        "Your points are valid for 12 months following your membership start date. Your membership year starts on a given date, found on the member card. In the end of the membership year, the points will be reset and a new membership year starts.",
    },
    {
      title: "When do I reach Plus level?",
      content:
        "When you reach 800 points you will reach the Plus level for your membership.",
    },
    {
      title: "How long will I keep the Plus status?",
      content: "For one year after you've reached the Plus level.",
    },
    {
      title: "Where can I find my receipts?",
      content:
        "All reciepts and order confirmations can be found under My account.",
    },
    {
      title: "How do I get my welcome offer?",
      content:
        "When you've registered an account at hm.com or in the HM App you'll recieve the Welcome offer within the next 24 hours. You'll find it under My account. If you haven't recieved it, check your spam filter or contact Customer Service.",
    },
    {
      title: "Where can I find my member card?",
      content: "The member card is found under My Account.",
    },
    {
      title: "Can I use my membership abroad?",
      content: "No, it's a country specific membership.",
    },
    {
      title: "How are you handling my personal information (GDPR)?",
      content:
        "Pleas see detailed information regarding personal information under the Privacy notice.",
    },
  ];

  return (
    <>
      <div className="bg-[#FAF9F8]  px-[26%] py-[4%]">
        <p className="text-red-600 text-4xl font-bold">FAQ</p>
        <Accordion allowMultiple className="bg-white my-8">
          {accordionData.map(({ title, content }, index) => (
            <AccordionItem key={index}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        {title}
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>{content}</AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};
