import { zodResolver } from '@hookform/resolvers/zod';
import {
  ArrowForward,
  CampaignRounded,
  ShoppingBagRounded,
} from '@mui/icons-material';
import { Box, Button, Divider, MenuItem, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

// 定义验证模式
const schema = z.object({
  company_name: z.string().nonempty({ message: 'company name is required' }),
  product: z.string().nonempty({ message: 'product is required' }),
  product_description: z
    .string()
    .nonempty({ message: 'product description is required' }),
  tone: z.string().nonempty({ message: 'tone is required' }),
  unique_selling_points: z.string().nonempty({ message: 'is required' }),
  intent: z.string().nonempty({ message: 'is required' }),
  example: z.string().nonempty({ message: 'is required' }),
});

interface ContentProps {
  onEvent: (data: any) => void;
}

interface IFormInput {
  company_name: string;
  product: string;
  product_description: string;
  tone: string;
  unique_selling_points: string;
  intent: string;
  example: string;
}

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export default function Info({ onEvent }: ContentProps) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(schema),
    defaultValues: {
      company_name: '',
      product: '',
      product_description: '',
      tone: '',
      unique_selling_points: '',
      intent: '',
      example: '',
    },
  });

  const onSubmit = (data: IFormInput) => {
    onEvent(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="mx-auto mt-[16px] w-[1000px]">
        <div className="flex justify-between">
          <div className="text-[24px] text-[#000000DE]">New Campaign</div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<ArrowForward />}
          >
            Select content
          </Button>
        </div>
        <div
          className="my-[16px] flex flex-col gap-[24px] rounded-xl p-[24px]"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.60)' }}
        >
          <div>
            <div className="mr-[8px] inline-block rounded-full bg-[#5042F41F] p-[4px]">
              <CampaignRounded className="text-[#5042F4]" />
            </div>
            <span className="text-[16px] font-medium text-[#000000DE]">
              Campaign Info
            </span>
          </div>
          <div>
            <div className="mb-[8px] font-medium text-[#000000DE]">
              Campaign name
            </div>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder={'Name your campaign, e.g., "Spring Launch"'}
            />
          </div>
          <div className="flex gap-[20px]">
            <div className="flex-1">
              <div className="mb-[8px] font-medium text-[#000000DE]">
                Campaign style & tone <span className="text-[#D32F2F]">*</span>
              </div>
              <TextField
                id="outlined-select-currency"
                select
                size="small"
                fullWidth
                defaultValue=""
                error={!!errors.tone}
                helperText={errors.tone ? errors.tone.message : ''}
                {...register('tone')}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="flex-1">
              <div className="mb-[8px] font-medium text-[#000000DE]">
                Influencer list
              </div>
              <TextField
                fullWidth
                select
                defaultValue="EUR"
                variant="outlined"
                size="small"
                placeholder="Select your influencer list"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
                <Divider orientation="horizontal" />
                <Button
                  fullWidth
                  variant="text"
                  sx={{ justifyContent: 'left' }}
                >
                  + CREATE A NEW LIST
                </Button>
              </TextField>
            </div>
          </div>
        </div>

        <div
          className="my-[16px] flex flex-col gap-[24px] rounded-xl p-[24px]"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.60)' }}
        >
          <div>
            <div className="mr-[8px] inline-block rounded-full bg-[#5042F41F] p-[4px]">
              <ShoppingBagRounded className="text-[#5042F4]" />
            </div>
            <span className="text-[16px] font-medium text-[#000000DE]">
              Product Info
            </span>
          </div>
          <div className="flex gap-[20px]">
            <div className="flex-1">
              <div className="mb-[8px] font-medium text-[#000000DE]">
                Company Name <span className="text-[#D32F2F]">*</span>
              </div>
              <Controller
                name="company_name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    variant="outlined"
                    size="small"
                    placeholder={'Enter your Company Name, e.g. "GlowBeauty"'}
                    error={!!errors.company_name}
                    helperText={
                      errors.company_name ? errors.company_name.message : ''
                    }
                  />
                )}
              />
            </div>
            <div className="flex-1">
              <div className="mb-[8px] font-medium text-[#000000DE]">
                Product name <span className="text-[#D32F2F]">*</span>
              </div>
              <Controller
                name="product"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    variant="outlined"
                    size="small"
                    placeholder={
                      'Enter your product name, e.g., "Skincare Serum"'
                    }
                    error={!!errors.product}
                    helperText={errors.product ? errors.product.message : ''}
                  />
                )}
              />
            </div>
          </div>
          <div>
            <div className="mb-[8px] font-medium text-[#000000DE]">
              Product description <span className="text-[#D32F2F]">*</span>
            </div>
            <Controller
              name="product_description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  size="small"
                  placeholder={
                    'Briefly describe your product, e.g., "Hydrating serum with natural ingredients."'
                  }
                  error={!!errors.product_description}
                  helperText={
                    errors.product_description
                      ? errors.product_description.message
                      : ''
                  }
                />
              )}
            />
          </div>
          <div>
            <div className="mb-[8px] font-medium text-[#000000DE]">
              Unique Selling Points (USPs)
              <span className="text-[#D32F2F]">*</span>
            </div>
            <Controller
              name="unique_selling_points"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  size="small"
                  placeholder={
                    'List the key features that make your product stand out, e.g., "Hydrating, natural ingredients, for all skin types."'
                  }
                  error={!!errors.unique_selling_points}
                  helperText={
                    errors.unique_selling_points
                      ? errors.unique_selling_points.message
                      : ''
                  }
                />
              )}
            />
          </div>
          <div>
            <div className="mb-[8px] font-medium text-[#000000DE]">
              intent<span className="text-[#D32F2F]">*</span>
            </div>
            <Controller
              name="intent"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  size="small"
                  placeholder="intent"
                  error={!!errors.intent}
                  helperText={errors.intent ? errors.intent.message : ''}
                />
              )}
            />
          </div>
          <div>
            <div className="mb-[8px] font-medium text-[#000000DE]">
              example
              <span className="text-[#D32F2F]">*</span>
            </div>
            <Controller
              name="example"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  size="small"
                  placeholder="example"
                  error={!!errors.example}
                  helperText={errors.example ? errors.example.message : ''}
                />
              )}
            />
          </div>
        </div>
      </div>
    </Box>
  );
}
