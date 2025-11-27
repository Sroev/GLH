import * as React from 'react';
import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
    Tailwind,
    Row,
    Column,
} from '@react-email/components';

interface OrderItem {
    name: string;
    quantity: number;
    price: number;
}

interface OrderConfirmationTemplateProps {
    customerName: string;
    orderId: string;
    items: OrderItem[];
    total: number;
    deliveryMethod: string;
    deliveryCost: number;
}

export const OrderConfirmationTemplate = ({
    customerName,
    orderId,
    items,
    total,
    deliveryMethod,
    deliveryCost,
}: OrderConfirmationTemplateProps) => {
    const grandTotal = total + deliveryCost;

    return (
        <Html>
            <Head />
            <Preview>Поръчката ти е приета! #{orderId}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
                        <Section className="mt-[32px]">
                            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                                Благодарим за поръчката!
                            </Heading>
                            <Text className="text-black text-[14px] leading-[24px]">
                                Здравей {customerName},
                            </Text>
                            <Text className="text-black text-[14px] leading-[24px]">
                                Твоята поръчка <strong>#{orderId}</strong> е приета успешно и се обработва.
                                Ще те уведомим, когато бъде изпратена.
                            </Text>
                        </Section>

                        <Section className="mt-[32px] border rounded-lg p-4 bg-gray-50">
                            {items.map((item, index) => (
                                <Row key={index} className="mb-4">
                                    <Column>
                                        <Text className="text-[14px] font-bold m-0">{item.name}</Text>
                                        <Text className="text-[12px] text-gray-500 m-0">Брой: {item.quantity}</Text>
                                    </Column>
                                    <Column align="right">
                                        <Text className="text-[14px] font-bold m-0">
                                            {(item.price * item.quantity).toFixed(2)} лв.
                                        </Text>
                                    </Column>
                                </Row>
                            ))}
                            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                            <Row>
                                <Column>
                                    <Text className="text-[14px] font-bold m-0">Междинна сума:</Text>
                                </Column>
                                <Column align="right">
                                    <Text className="text-[14px] font-bold m-0">{total.toFixed(2)} лв.</Text>
                                </Column>
                            </Row>
                            <Row>
                                <Column>
                                    <Text className="text-[14px] font-bold m-0">Доставка ({deliveryMethod}):</Text>
                                </Column>
                                <Column align="right">
                                    <Text className="text-[14px] font-bold m-0">{deliveryCost.toFixed(2)} лв.</Text>
                                </Column>
                            </Row>
                            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                            <Row>
                                <Column>
                                    <Text className="text-[18px] font-bold m-0 text-green-600">Общо:</Text>
                                </Column>
                                <Column align="right">
                                    <Text className="text-[18px] font-bold m-0 text-green-600">
                                        {grandTotal.toFixed(2)} лв.
                                    </Text>
                                </Column>
                            </Row>
                        </Section>

                        <Section className="text-center mt-[32px] mb-[32px]">
                            <Text className="text-[#666666] text-[12px] leading-[24px]">
                                Ако имаш въпроси, просто отговори на този имейл.
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default OrderConfirmationTemplate;
